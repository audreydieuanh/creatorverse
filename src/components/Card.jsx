import { useEffect } from "react"
import ViewCreator from "../pages/ViewCreator"
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
    // let element = useRoutes([
    //     {
    //         path: "/detail/id",
    //         element: <ViewCreator data={props} />
    //     }
    // ])


    return (
        <div className="card">
            <a href={props.url} className="link"><h2 id="creatorName">{props.name}</h2></a>
            <div className="pen"><Link to={`/edit/${props.id}`} className="link"
                state={{
                    id: props.id,
                    name: props.name,
                    url: props.url,
                    description: props.description,
                    imageURL: props.imageURL
                }}><i class="fas fa-pen"></i></Link></div>
            <div className="glass"><Link to={`/detail/${props.id}`} className="link"
                state={{
                    id: props.id,
                    name: props.name,
                    url: props.url,
                    description: props.description,
                    imageURL: props.imageURL
                }}><i class="fas fa-search"></i></Link></div>
            <p className="desription">{props.description}</p>
            <img className="creatorImage" src={props.imageURL} alt="creator image" />
        </div>
    )
}

export default Card;