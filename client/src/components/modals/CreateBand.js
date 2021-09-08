import React from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";

const CreateBand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl placeholder={"Введите название бренд"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={onHide}
                    variant={'outline-danger'}
                >
                    Закрыть
                </Button>
                <Button
                    onClick={onHide}
                    variant={'outline-success'}
                >
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBand;