import React, {useState} from 'react';
import './Login.css';
import {AuthClient, IConfig, User} from 'apiclient';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const apiConfig = new IConfig();
    const navigate = useNavigate();

    async function loginUser(user: User) {
        const authClient = new AuthClient(apiConfig);
        const authResponse = await authClient.auth(user);
        const token = authResponse === null ? '' : authResponse;
        sessionStorage.setItem('jwt', token);
        navigate('/weather');
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await loginUser({
            userName: username,
            password: password
        } as User);
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;