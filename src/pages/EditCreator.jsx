import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreator.css';

const EditCreator = ({ data }) => {
    const { id } = useParams();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        const creatorData = data.filter(creator => creator.id === id)[0];
        if (creatorData) {
            setCreator(creatorData);
        }
    }, [data, id]);

    const updateCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL })
            .eq('id', id);

        window.location = '/';
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreator({ ...creator, [name]: value });
    }


    const deleteCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        window.location = '/';

    }

    return (
        <form onSubmit={updateCreator} className='editForm'>
            <div className='formGroup'>
            <label htmlFor='name' className='formLabel'>Full Name: </label>
            <input type='text' className='formInput' id='name' name='name' value={creator.name || ''} onChange={handleInputChange} />
            <br />
            </div>

            <div className='formGroup'>
            <label htmlFor='url' className='formLabel'>URL: </label>
            <input type='text' className='formInput' id='url' name='url' value={creator.url || ''} onChange={handleInputChange} />
            <br />
            </div>

            <div className='formGroup'>
            <label htmlFor='name' className='formLabel'>Description: </label>
            <textarea rows="5" cols="50" className='formTextarea' id='description' name='description' value={creator.description || ''} onChange={handleInputChange}></textarea>
            <br />
            </div>

            <div className='formGroup'>
            <label htmlFor='imageURL' className='formLabel'>Image URL: </label>
            <input type='text' className='formInput' id='imageURL' name='imageURL' value={creator.imageURL || ''} onChange={handleInputChange} />
            </div>

            <input type='submit' value="Submit" className='submitBtn'/>
            <button className='deleteBtn' onClick={deleteCreator}>Delete</button>
        </ form>
    )
}

export default EditCreator;