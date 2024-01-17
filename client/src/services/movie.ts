import axios, { AxiosError } from "axios";
import IMovie from "../models/IMovie";


const baseUrl = process.env.REACT_APP_API_BASE_URL;

const getAllMoviesByCategory = async (listType: string) => {
    const response = await axios.get(`${baseUrl}/${listType}`);
    return response.data as IMovie[]
}

const getMovieById = async (listType:string, id:string|number) => {
    const response = await axios.get(`${baseUrl}/${listType}/${id}`)
    return response.data;
}

const createNewFavourite = async (newFavouriteObj: IMovie) => {
    try {
        const response = await axios.post(`${baseUrl}/favourite`, newFavouriteObj, {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        )
        return response.data;
    } 
    catch(_e){
        let error:AxiosError = _e as AxiosError;
        if (error?.response?.status === 500) {
            alert(`${newFavouriteObj.title} is already present in favourite list`);
        } else {
            return error
        }
    }

};

const deleteExistingFavourite = async (deleteFavourite: string) => {
    const response = await axios.delete(`${baseUrl}/favourite/${deleteFavourite}`)
        .then(response => { return 'Deleted successfully' });
    return response;
};

export {
    getAllMoviesByCategory
    , createNewFavourite
    , deleteExistingFavourite
    , getMovieById
};