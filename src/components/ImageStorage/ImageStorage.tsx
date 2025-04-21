"use client";
import React, { useEffect, useState } from 'react';
import { storeImage, getAllImages } from '../../storage/imageStore'; // Adjust the import according to your file structure

const ImageUpload: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    // Handle image upload
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            for (const file of files) {
                const imageId = file.name; // Use file name or any unique id
                await storeImage(file, imageId); // Store the image
            }

            // After storing, retrieve all images and update the state
            const allImages = await getAllImages();
            setImages(allImages.map((img) => img.image)); // Store base64 strings in state
        }
    };

    // Fetch images from IndexedDB on component mount (reloading the page)
    useEffect(() => {
        const loadImages = async () => {
            const allImages = await getAllImages(); // Retrieve all stored images
            setImages(allImages.map((img) => img.image)); // Set the base64 images in state
        };

        loadImages(); // Call function on mount
    }, []); // Empty dependency array to ensure it runs once when the component is mounted

    return (
        <div>
            <label htmlFor="file-upload" className="custom-file-upload">
                Choose File
            </label>
            <input type="file" id="file-upload" accept="image/*" multiple onChange={handleImageUpload} />
            <div className='grid grid-cols-4 gap-4'>
                {images.map((image, index) => (
                    <div key={index} className='w-full aspect-square'>
                        <img
                            src={image}
                            alt={`Stored image ${index}`}
                            className='w-full h-full object-cover rounded'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
