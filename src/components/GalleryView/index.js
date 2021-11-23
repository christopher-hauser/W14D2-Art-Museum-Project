import { useParams } from 'react-router-dom';


const GalleryView = ({galleries}) => {
    const { galleryId } = useParams();
    const choice = galleries.find(gallery => gallery.id === +galleryId)
    console.log(choice)
    return (
        <>
            <h1>Hello from Gallery View!</h1>
            <h2>{choice.name}</h2>
        </>
    )
}

export default GalleryView;
