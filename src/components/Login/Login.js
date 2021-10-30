import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import useAuth from '../hooks/useAuth';




const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(res => {
                history.push(redirect_url)
            })
    }
    const handleGithubLogin = () => {
        signInUsingGithub()
            .then(res => {
                history.push(redirect_url)
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="text-center mt-5">
                <h2> Login With </h2>
                <button className="btn btn-warning " onClick={handleGoogleLogin} style={{ marginRight: "20px" }}> Login use Google</button>
                <button className="btn btn-warning" onClick={handleGithubLogin}> Login use Git</button><br />
                <Link to="/registar">, please Registered?</Link>
            </div>
        </div >
    );
};

export default Login;