import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import MoviesList from '../Movies-List/MoviesList';
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import MovieDetails from "../Movies/MovieDetails";

const Menu = () => {
    const [search,setSearch] = useState("");

    const updateValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }
    const MenuHome = () => {
        return (
            <Nav fill variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link to="/movies-coming" as={Link}>Upcoming Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/movies-in-theaters" as={Link}>Now Playing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/top-rated-india" as={Link}>Top Rated movie - India</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/top-rated-movies" as={Link}>Top Rated movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to="/favourite" as={Link}>Favourites</Nav.Link>
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
                <Route path="/movies-coming" element={<MoviesList listType='movies-coming' showFavourite={true} search={search} />} />
                <Route path="/movies-in-theaters" element={<MoviesList listType='movies-in-theaters' showFavourite={true} search={search}/>} />
                <Route path="/top-rated-india" element={<MoviesList listType='top-rated-india' showFavourite={true} search={search}/>} />
                <Route path="/top-rated-movies" element={<MoviesList listType='top-rated-movies' showFavourite={true} search={search} />} />
                <Route path="/favourite" element={<MoviesList listType='favourite' showFavourite={false} search={search}/>}  />
                <Route path="/movies-coming/:id" element={<MovieDetails listType='movies-coming'/>} />
                <Route path="/movies-in-theaters/:id" element={<MovieDetails listType='movies-in-theaters'/>} />
                <Route path="/top-rated-india/:id" element={<MovieDetails listType='top-rated-india'/>} />
                <Route path="/top-rated-movies/:id" element={<MovieDetails listType='top-rated-movies'/>} />
                <Route path="/favourite/:id" element={<MovieDetails listType='favourite'/>} />
            </Routes>
        </>
    );
}

export default Menu;