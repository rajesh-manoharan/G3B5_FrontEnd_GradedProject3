import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IMovie from "../../models/IMovie";
import { getMovieById } from "../../services/movie";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

type Props = {
  listType: string;
};

type Params = {
  id: string;
};

const MovieDetails = ({ listType }: Props) => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<Params>();

  useEffect(() => {
    const helper = async () => {
      try {
        const data = await getMovieById(listType as string, id as string);
        setMovie(data);
      } catch (error) {
        setError(error as Error);
      }
      setLoading(false);
    };
    helper();
  }, [id, listType]);

  return (
    <div>
      {!loading && !error && movie && (
        <>
          <Row>
            <Col xs={12} className="my-2">
              <h1>{movie.title}</h1>
            </Col>
            <Col xs={12} lg={4} className="my-2">
              <img
                src={`${baseUrl}/images/${movie.poster}`}
                alt={movie.title}
                className="w-80"
              />
            </Col>
            <Col xs={12} lg={8}>
              <div className="fs-5 my-2 ">
                {" "}
                <b>Synposis : </b> <br></br>
                {movie.storyline}
              </div>
              <Row xs={3} className="text-sm my-2">
                <Col>
                  <FontAwesomeIcon icon={faClock} />
                  <b>Duration:</b>
                  {movie.duration}
                </Col>
              </Row>
              <Row xs={3} className="text-sm my-2">
                <Col>
                  <b>Genres:</b>
                  {movie.genres.map((gener) => (
                    <Col key={gener} className="d-flex align-items-sm-stretch">
                      {gener}
                    </Col>
                  ))}
                </Col>
              </Row>
              <Row xs={3} className="text-sm my-2">
                <Col>
                  <b>Actors:</b>
                  {movie.actors.map((actor) => (
                    <Col key={actor} className="d-flex align-items-sm-stretch">
                      {actor}
                    </Col>
                  ))}
                </Col>
              </Row>
              <Row xs={3} className="text-sm my-2"> 
                <Col>
                    <span className="me-2">
                        <FontAwesomeIcon icon={faStar} />
                        <b>imdb:</b> {movie.imdbRating}
                    </span>
                </Col>
                <Col>
                    <span className="me-2">
                        <b>Average Rating:</b> {movie.averageRating}
                    </span>
                </Col>
                <Col>
                    <span className="me-2">
                        <b>Content Rating:</b> {movie.contentRating}
                    </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <br></br>
          <Link to="/">Back to Home</Link>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
