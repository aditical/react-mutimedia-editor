// Open or create the IndexedDB database
const openDB = async (type: string) => {
    const dbName = `${type}StoreDB`;
    const storeName = `${type}s`;

    // Check if DB already exists (basic detection using indexedDB.databases)
    const existingDBs = await indexedDB.databases?.();
    const existingDB = existingDBs?.find((db) => db.name === dbName);
    const version = existingDB ? existingDB.version ?? 1 : 1;

    return new Promise<{ db: IDBDatabase; storeName: string }>((resolve, reject) => {
        const request = indexedDB.open(dbName, version);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBRequest).result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' });
            }
        };

        request.onerror = () => reject('Error opening IndexedDB');
        request.onsuccess = () => resolve({ db: request.result, storeName });
    });
};

// Convert a file (Blob) to a base64 string
const convertToBase64 = (file: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

// Store image in IndexedDB
export const storeImage = async (image: Blob, id: string, type: string) => {
    const base64Image = await convertToBase64(image);
    const { db, storeName } = await openDB(type);

    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);

    store.put({ id, image: base64Image });

    return new Promise<void>((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(`Error storing ${type}`);
        transaction.onabort = () => reject('Transaction aborted');
    });
};



// Get all images from IndexedDB
export const getAllImages = async (type: string) => {
    const { db, storeName } = await openDB(type);
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    return new Promise<Array<{ id: string; image: string }>>((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(`Error retrieving ${storeName}`);
    });
};