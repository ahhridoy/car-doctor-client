import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={notFoundImg} alt="" /> <br />
            <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;