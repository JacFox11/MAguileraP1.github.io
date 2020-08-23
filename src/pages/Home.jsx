import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
        <Container fluid>
            <Jumbotron>
                <h2>Bienvenido a tu catalogo de Apuntes</h2>
                <p>Aqui podras gaurdar todos los apuntes que necesites recordar.</p>
            </Jumbotron>
            <Link to="/src/pages/entrynew.jsx">
                <Button BsStyle="Primary">Nuevo Apunte</Button>
            </Link>
        </Container>
        )
    }
}