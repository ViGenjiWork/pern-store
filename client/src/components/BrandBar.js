import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.brands.map(brand =>
                <ListGroupItem
                    action
                    variant="light"
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    active={brand.id === device.selectedBrand.id}
                >
                    {brand.name}
                </ListGroupItem>
            )}
        </ListGroup>
    );
});

export default BrandBar;