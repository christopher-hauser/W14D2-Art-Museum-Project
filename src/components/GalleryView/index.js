import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';


const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.id === +galleryId)

    const list = gallery.objects.map(art => {
        return <ArtImageTile art={art} galleryId={galleryId}></ArtImageTile>
    })


    return (
        <>
            <h1>Hello from Gallery View!</h1>
            <h2>{gallery.name}</h2>

            {/* {gallery.objects.map(art => {
                return <ArtImageTile art={art} galleryId={galleryId}></ArtImageTile>
            })} */}
            {list}
        </>
    )
}

export default GalleryView;


// for (let i = 0; i < gallery.objects; i++) {
//     const galleryObject = gallery.objects[i];
//     const image = galleryObject.images[0];
