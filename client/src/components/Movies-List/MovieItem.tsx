import { Card } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleMinus, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { createNewFavourite, deleteExistingFavourite } from "../../services/movie";

type Props = {
    movie: IMovie,
    showFavourite: boolean
}
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const MovieItem = ({ movie, showFavourite }: Props) => {
    const { poster, title } = movie;
    const handleClickFavourite = () => {
        alert(`${movie.title} is being added to favourite list`);
        createNewFavourite(movie);
    }

    const handleClickUnFavourite = () => {
        alert(`${movie.title} is removed from favourite list. Please refresh!!!`);
        deleteExistingFavourite(movie.id);
    }
    
    return (
        <Card className="my-3">
            <Card.Img variant="top" src={`${baseUrl}/images/${poster}`} />
            <Card.Body>
                <Card.Title >
                    <div>
                        {title}
                    </div>
                </Card.Title>
            </Card.Body>
            {showFavourite ? 
                (<Card.Footer>
                    <div>
                        <FontAwesomeIcon icon={faHeartCirclePlus} style={{ color: "red" }} onClick={handleClickFavourite} />
                        <span> Add to Favourites</span>
                    </div>
                </Card.Footer>
                )
                :
                (<Card.Footer>
                    <div>
                        <FontAwesomeIcon icon={faHeartCircleMinus} style={{ color: "red" }} onClick={handleClickUnFavourite} />
                        <span> Remove Favourites</span>
                    </div>
                </Card.Footer>
                )
            }
        </Card>
    );
}

export default MovieItem;