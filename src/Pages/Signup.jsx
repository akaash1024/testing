import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import './css/user.css'


export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        // Basic validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }



        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = existingUsers.some(user => user.email === email);

        if (userExists) {
            setError('User already exists');
            return;
        }

        existingUsers.push({ email, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Log the user in after successful signup
        login({ email });
        navigate('/');
    };

    return (
        <div className="signup-container">
            <div className="form">

                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="tata--cliqLogo-user"></div>
                        <h2>Sign Up</h2>
                        {error && <div className="error-message">{error}</div>}

                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                autoComplete='new-password'
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                required
                                autoComplete='new-password'
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Sign Up</button>
                        </div>

                        <p>
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};