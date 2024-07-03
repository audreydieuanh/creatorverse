import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ShowCreators.css';

const ShowCreators = (props) => {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        setCreators(props.data);
    }, [props]);

    return (
        <div className="cardContainer">
            {
                creators && creators.length > 0 ?
                    creators.map((creator, index) =>
                        <Card id={creator.id} name={creator.name} url={creator.url} description={creator.description} imageURL={creator.imageURL} />
                    ) : <h2>{'No Creators Yet'}</h2>
            }
        </div>
    )
}

export default ShowCreators;