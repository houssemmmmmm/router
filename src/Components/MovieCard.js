import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.posterURL} style={{ width: '100%', height: "25em" }} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                        <br></br>
                        <br></br>

                        <span style={{ fontSize: "1.2em", fontWeight: "700" }}>{props.rating}/10</span>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
