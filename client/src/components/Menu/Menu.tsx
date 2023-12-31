import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import MoviesList from '../Movies-List/MoviesList';
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';

const Menu = () => {
    const [search,setSearch] = useState("");

    const updateValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }
    const MenuHome = () => {
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
                <input type="text" 
                id="search"
                name="search"
                value={search}
                onChange={updateValue}
                autoFocus={true}></input>
            </Nav>
        )
    }

    return (
        <>
            <MenuHome></MenuHome>
            <Routes>
                <Route path="/" element={<MoviesList listType='movies-coming' showFavourite={true} search={search}/>} />
                <Route path="/upcoming" element={<MoviesList listType='movies-coming' showFavourite={true} search={search} />} />
                <Route path="/playing" element={<MoviesList listType='movies-in-theaters' showFavourite={true} search={search}/>} />
                <Route path="/topindia" element={<MoviesList listType='top-rated-india' showFavourite={true} search={search}/>} />
                <Route path="/topmovie" element={<MoviesList listType='top-rated-movies' showFavourite={true} search={search} />} />
                <Route path="/favourites" element={<MoviesList listType='favourite' showFavourite={false} search={search}/>}  />
            </Routes>
        </>
    );
}

export default Menu;