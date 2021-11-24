import { Link, Redirect } from 'react-router-dom';

const ArtDescription = ({ art, galleryId }) => {
    return (
        <>
            <a href={art.url}>
                <h2>{art.title}</h2>
            </a>
            <p>{art.description}</p>
            <p>{art.creditline}</p>
            <p>{art.technique}</p>

            <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
            <br></br>
        </>
    )
}

export default ArtDescription;
