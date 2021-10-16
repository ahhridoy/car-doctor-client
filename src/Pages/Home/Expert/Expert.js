import React from 'react';
import { Col } from 'react-bootstrap';

const Expert = (props) => {
    const {name, expertize, img} = props.expert;
    return (
        <Col lg={3} md={4} xs={6}>
            <div>
            <img className="w-100 rounded" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
            </div>
        </Col>
    );
};

export default Expert;