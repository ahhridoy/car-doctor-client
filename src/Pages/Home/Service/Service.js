import React from "react";
import { Button, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    const history = useHistory();

    const handleServiceClick = () => {
        history.push(`/booking/${id}`)
    }

    return (
        <Col lg={4} md={6} xs={12}>
            <div className="service-container">
                <img className="w-100 rounded" src={img} alt="" />
                <h3 className="text-danger">-{name}-</h3>
                <h6>Charge: {price}</h6>
                <p className="py-3">{description}</p>
                <Button variant="warning" onClick={handleServiceClick}>Book {name.toLowerCase()}</Button>
            </div>
        </Col>
    );
};

export default Service;
