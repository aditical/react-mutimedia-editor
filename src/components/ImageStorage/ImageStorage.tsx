"use client";
import React, { useEffect, useState } from 'react';
import { storeImage, getAllImages } from '../../storage/imageStore'; // Adjust the import according to your file structure

const FileUpload: React.FC = (props: { type: string }) => {
    const [images, setImages] = useState<string[]>([]);
    const { type } = props;
    // Handle image upload
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            for (const file of files) {
                const imageId = file.name; // Use file name or any unique id
                await storeImage(file, imageId, type); // Store the image
            }

            // After storing, retrieve all images and update the state
            const allImages = await getAllImages(type);
            console.log({ allImages })
            setImages(allImages.map((img) => img.image)); // Store base64 strings in state
        }
    };

    // Fetch images from IndexedDB on component mount (reloading the page)
    useEffect(() => {
        const loadImages = async () => {
            const allImages = await getAllImages(type); // Retrieve all stored images
            setImages(allImages.map((img) => img.image)); // Set the base64 images in state
        };
        loadImages(); // Call function on mount
    }, [type]); // Empty dependency array to ensure it runs once when the component is mounted

    return (
        <div>
            <label htmlFor="file-upload" className="custom-file-upload">
                Choose File
            </label>
            <input type="file" id="file-upload" accept={`${type}/*`} multiple onChange={handleFileUpload} />
            <div className='grid grid-cols-4 gap-4'>
                {images.map((image, index) => (
                    <div key={index} className="w-full aspect-square">
                        {type === "video" ? (
                            <video width="320" height="240" controls className="w-full h-full object-cover rounded">
                                <source src={`${image}#t=15"`} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={image}
                                alt={`Stored ${type} ${index}`}
                                className="w-full h-full object-cover rounded"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUpload;
