import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import './css/user.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        // Simple validation
        if (!email || !password) {
            setError('Both fields are required!');
            return;
        }

        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            setSuccessMessage('Login successful! Redirecting...');
            setTimeout(() => {
                login({ email });
                navigate('/cart');
            }, 1000);
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="form">


                <div className="login-form">
                    <div className="tata--cliqLogo-user"></div>
                    <h2>Login</h2>
                    {error && <div className="error-message">{error}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}


                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                autoComplete="current-password"
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <p>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
