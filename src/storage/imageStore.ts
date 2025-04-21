// Open or create the IndexedDB database
const openDB = async () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open('imageStoreDB', 1);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBRequest).result;
            if (!db.objectStoreNames.contains('images')) {
                db.createObjectStore('images', { keyPath: 'id' });
            }
        };

        request.onerror = () => reject('Error opening IndexedDB');
        request.onsuccess = () => resolve(request.result);
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
export const storeImage = async (image: Blob, id: string) => {
    const db = await openDB();
    const transaction = db.transaction('images', 'readwrite');
    const store = transaction.objectStore('images');
    const base64Image = await convertToBase64(image);

    store.put({ id, image: base64Image });

    return new Promise<void>((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject('Error storing image');
    });
};

// Get all images from IndexedDB
export const getAllImages = async () => {
    const db = await openDB();
    const transaction = db.transaction('images', 'readonly');
    const store = transaction.objectStore('images');
    const request = store.getAll();

    return new Promise<Array<{ id: string; image: string }>>((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject('Error retrieving images');
    });
};
