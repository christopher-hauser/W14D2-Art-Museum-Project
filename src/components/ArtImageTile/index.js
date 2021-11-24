import { Link } from 'react-router-dom'

const ArtImageTile = ({ art, galleryId }) => {
        return (
            <>
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
                <img src={art.images[0]?.baseimageurl} alt='a picture' style={{width: '100px', height: '100px'}}></img>
            </Link>
            </>
        )
    }

export default ArtImageTile;
