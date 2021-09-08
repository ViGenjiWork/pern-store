import React from 'react';
import {Container, ListGroup, ListGroupItem, Row, Col} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ListGroup className="mt-3">
                        <ListGroupItem md={3}>
                            Виды серверного оборудования:
                            <TypeBar/>
                        </ListGroupItem>
                        <ListGroup>
                            <ListGroupItem md={9} className='mt-3'>
                                Бренды:
                                <BrandBar />
                            </ListGroupItem>
                        </ListGroup>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <DeviceList/>
                </Col>
            </Row>

        </Container>
    );
};

export default Shop;