import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || "/home"

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl);
        });
    }
    return (
        <div>
            <h2>This is login</h2>
            <Button variant="btn btn-danger" onClick={handleGoogleSignIn}>Google Sign In</Button>
        </div>
    );
};

export default Login;