import { NavLink, Switch, Route } from 'react-router-dom';
import './GalleryNavigation.css';


const GalleryNavigation = ({ galleries }) => {
    console.log(galleries);
    return (
        <div>
            <nav>
                <h1>Galleries</h1>
                <NavLink exact to='/'> Home </NavLink>

                {galleries.map(gallery => (
                    <div key={gallery.id}>
                        <NavLink to={`/galleries/${gallery.id}`}> {gallery.name} </NavLink>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default GalleryNavigation;
