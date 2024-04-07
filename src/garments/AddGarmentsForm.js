import React, { useState, useEffect } from 'react';
import { firestore, storage } from './App'; // Import firestore and storage

const GarmentForm = () => {
    const [garmentData, setGarmentData] = useState({
        name: '',
        startDate: '',
        endDate: '',
        operations: [],
    });

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null); // State to store image URL

    const handleChange = (event) => {
        setGarmentData({ ...garmentData, [event.target.name]: event.target.value });
    };

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image) {
            console.error('Please select an image');
            return;
        }

        const uploadTask = storage.ref(`garments/${image.name}`).put(image);

        try {
            await uploadTask;
            const downloadURL = await uploadTask.ref.getDownloadURL();
            setImageUrl(downloadURL);

            await firestore.collection('garments').add({
                ...garmentData,
                imageUrl, // Add image URL to garment data
            });
            setGarmentData({ name: '', startDate: '', endDate: '', operations: [] });
            setImage(null);
            setImageUrl(null);
        } catch (error) {
            console.error('Error adding garment or uploading image:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields for garment details */}
            <input type="text" name="name" placeholder="Garment Name" value={garmentData.name} onChange={handleChange} />
            <input type="date" name="startDate" value={garmentData.startDate} onChange={handleChange} />
            <input type="date" name="endDate" value={garmentData.endDate} onChange={handleChange} />
            <input type="file" onChange={handleImageUpload} />
            <button type="submit">Add Garment</button>
        </form>
    );
};

export default GarmentForm;
