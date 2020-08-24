import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Home.css';

export default class entrynew extends Component {
    render() {
        return (
        <Container fluid>
            <Jumbotron>
                <h2>Nuevo Apunte</h2>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Descripcion</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Description"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Etiquetas</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Ej. React, Bootstrap, Reactstrap, etc."
                        aria-label="Tags"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Jumbotron>
            <Link to="/">
                <Button BsStyle="Primary">Guardar</Button>
            </Link>
        </Container>
        )
    }
}