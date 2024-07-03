import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ViewCreator.css';

const ViewCreator = () => {
    const { id } = useParams();
    const location = useLocation();
    const { name, url, description, imageURL } = location.state || {}; 
    return (
        <div className="DetailView">
            <h1 className="creatorName">{name}</h1>
            <h3 className="creatorUrl">Link to profile: <a href={url}>{url}</a></h3>
            <p className="desription">{description}</p>
            <img className="creatorImage" src={imageURL} alt="creator image" />
            <Link to={`/edit/${id}`}><button className='editBtn'>Edit information</button></Link>
        </div>
    )
}

export default ViewCreator;