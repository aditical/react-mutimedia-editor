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
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
            <div>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Stored image ${index}`} width="100" />
                ))}
            </div>
        </div>
    );
};

export default ImageUpload;
