import React from 'react';
import {Button, Dropdown, Form, FormControl, Modal} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const CreateDevice = ({show, onHide}) => {

    const {device} = React.useContext(Context)

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
                    Добавить новый девайс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <DropdownToggle>Выберите тип</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type => (
                                <DropdownItem
                                    key={type.id}
                                >
                                    {type.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <DropdownToggle>Выберите бренд</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand => (
                                <DropdownItem
                                    key={brand.id}
                                >
                                    {brand.name}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl
                        className='mt-2'
                        placeholder={"Введите название устройства"}
                    />
                    <FormControl
                        className='mt-2'
                        placeholder={"Введите цену устройства"}
                        type='number'
                    />
                    <FormControl
                        className='mt-2'
                        type='file'
                    />
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

export default CreateDevice;