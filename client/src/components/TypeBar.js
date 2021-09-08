import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => (
                <ListGroupItem
                    action
                    variant="light"
                    style={{cursor: "pointer"}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    );
});

export default TypeBar;