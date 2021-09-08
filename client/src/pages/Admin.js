import React from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBand from "../components/modals/CreateBand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {

    const [brandVisible, setBrandVisible] = React.useState(false)
    const [typeVisible, setTypeVisible] = React.useState(false)
    const [deviceVisible, setDeviceVisible] = React.useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-4"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-4"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={'outline-dark'}
                className="mt-2 p-4"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство<
                /Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;