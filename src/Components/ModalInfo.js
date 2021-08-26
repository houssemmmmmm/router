import React, { useState, useRef } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalInfo(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const titleRef = useRef();
    const descRef = useRef();
    const posterUrlRef = useRef();
    const ratingRef = useRef();

    return (
        <div>
            <div style={{ paddingBottom: "1.5em" }}>
                <Button variant="danger" onClick={handleShow}>
                    Add a new movie
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your movie Informations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" ref={titleRef} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} ref={descRef} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Poster URL</Form.Label>
                            <Form.Control type="text" ref={posterUrlRef} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" ref={ratingRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={() => {
                        return (
                            (titleRef.current.value && descRef.current.value && posterUrlRef.current.value && ratingRef.current.value &&
                                (props.renderNewList([...props.oldMovies, {
                                    title: titleRef.current.value,
                                    description: descRef.current.value,
                                    posterURL: posterUrlRef.current.value,
                                    rating: ratingRef.current.value,
                                }])), handleClose()
                            )
                        )
                    }}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalInfo
