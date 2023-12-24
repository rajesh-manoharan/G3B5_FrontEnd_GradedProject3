import { useEffect, useState } from "react";
import { getAllMoviesByCategory } from "../../services/movie";
import IMovie from "../../models/IMovie";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import MovieItem from "./MovieItem";

type Props = {
    listType: string,
    showFavourite: boolean
}
const MoviesList = ({ listType, showFavourite }: Props) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const helper = async () => {
            try {
                const data = await getAllMoviesByCategory(listType);
                setMovies(data);
            }
            catch (error) {
                setError(error as Error)
            }
            setLoading(false);
        }
        helper()
    }, [listType]
    )

    return (
        <>
            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
            {
                (!loading && error) && (
                    <Alert variant='danger'>
                        {error.message}
                    </Alert>
                )

            }
            {
                (!loading && !error) && (
                    <Container className='my-3'>
                        {
                            showFavourite ?
                                <h3>Movies</h3>
                                : <h3>Favourite</h3>
                        }
                        <Row xs={1} md={3} lg={6}>
                            {
                                movies.map(
                                    (movie) =>
                                        <Col key={movie.id} className="col-md-2 d-flex align-items-stretch">
                                            <MovieItem movie={movie} showFavourite={showFavourite} />
                                        </Col>
                                )
                            }
                        </Row>
                    </Container>
                )
            }
        </>
    )
}
export default MoviesList;