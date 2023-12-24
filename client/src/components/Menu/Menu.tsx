import { useRef, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    const [search, setSearch] = useState('');
    const searchRef = useRef<HTMLInputElement>(null);
    

    const handleClick = () => {
        setSearch(searchRef?.current?.value?? '');
        console.log(search);
    }

    return (
        <Nav fill variant="pills" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link to="/upcoming" as={Link}>Upcoming Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/playing" as={Link}>Now Playing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/topindia" as={Link}>Top Rated movie - India</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/topmovie" as={Link}>Top Rated movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/favourites" as={Link}>Favourites</Nav.Link>
            </Nav.Item>
            <input type="text" placeholder="search movie" ref={searchRef}></input>
            <button onClick={handleClick}>Search</button>
        </Nav>
    );
}

export default Menu;