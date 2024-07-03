import { supabase } from '../client'
import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './AddCreator.css';


const AddCreator = () => {
    const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' })

    const addCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .insert(creator)
            .select();

        window.location = '/';
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreator({ ...creator, [name]: value });
    }

    return (
        <div>
            <form onSubmit={addCreator} className='addForm'>
                <div className='formGroup'>
                <label htmlFor='name' className='formLabel'>Full Name: </label>
                <input type='text' className='formInput' id='name' name='name' value={creator.name} onChange={handleInputChange} />
                </div>
                <br />

                <div className='formGroup'>
                <label htmlFor='url' className='formLabel'>URL: </label>
                <input type='text' className='formInput' id='url' name='url' value={creator.url} onChange={handleInputChange} />
                </div>
                <br />

                <div className='formGroup'>
                <label htmlFor='name' className='formLabel'>Description: </label>
                <textarea rows="5" cols="50" className='formTextarea' id='description' name='description' value={creator.description} onChange={handleInputChange}></textarea>
                </div>
                <br />

                <div className='formGroup'>
                <label htmlFor='imageURL' className='formLabel'>Image URL: </label>
                <input type='text' className='formInput' id='imageURL' name='imageURL' value={creator.imageURL} onChange={handleInputChange} />
                </div>

                <input type='submit' value='Submit' className='submitBtn' />
            </form>
        </div>
    );


}

export default AddCreator;
