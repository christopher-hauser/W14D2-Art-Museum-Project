import { Link } from 'react-router-dom'

const ArtImageTile = ({ art, galleryId }) => {
        return (
            <>
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
                <img src={art.images[0]?.baseimageurl} alt='a picture'></img>
            </Link>
            </>
        )
    }

export default ArtImageTile;
