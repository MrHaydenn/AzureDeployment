import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../assets/navbar.css';
import Logo from '../assets/images/genevalogo.svg';
import Logo1 from '../assets/images/profile-icon.png';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tourUsername, setTourUsername] = useState('');
    const [tourPassword, setTourPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const axiosInstance = axios.create({
        baseURL: 'http://mrhaydenn.us.to:8000',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        if (username && password) {
            const data = {
                username: username,
                password: password,
            };

            axiosInstance.post('http://127.0.0.1:8000/api/login/', data)
                .then(response => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.token);
                    setIsLoggedIn(true);
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (tourUsername && tourPassword) {
            const tourData = {
                username: tourUsername,
                password: tourPassword,
            };

            axiosInstance.post('http://mrhaydenn.us.to:8000/api/login/', tourData)
                .then(response => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.token);
                    setIsLoggedIn(true);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    useEffect(() => {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.querySelector(".close");

        if (btn && modal && span) {
            btn.onclick = function () {
                modal.style.display = "block";
            }

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUsername('');
        setPassword('');
        setTourUsername('');
        setTourPassword('');
        setIsLoggedIn(false);
    };

    return (

        <nav className="navbar">
            <a href="/"><img src={Logo} className='genLogo' alt='geneva logo' /></a>
            <div className="container">
                <div className="nav-elements">
                    <ul className="navList">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li>
                            <NavLink to="/trivia">Trivia</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reviews">Reviews</NavLink>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/upload">Upload</NavLink>
                            </li>) : ("")}
                    </ul>
                    {isLoggedIn ? (
                        <input id="myBtn" className="buttonImg" type="Image" src={Logo1} height="50" width="50" name="Icon"></input>) :
                        (<Button id="myBtn" className="buttonImg" variant="warning" size="lg" onClick={() => handleLogin()}>Login</Button>)}
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            {isLoggedIn ? (
                                <div>
                                    <h3>Welcome, {username}!</h3>
                                    <Button size="lg" variant="danger" onClick={() => handleLogout()}>Logout</Button>
                                </div>
                            ) : (
                                <div>
                                    <center><h3>Login</h3></center>
                                    <label for="username">Username: </label>
                                    <input
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    /> <br />
                                    <label for="password">Password: </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <br></br>
                                    <center><Button variant="success" size="lg" onClick={() => handleLogin()}>Login</Button></center><br />
                                    <center><h3>Or Login With A Tour Code!</h3></center>
                                    <label for="firstname"> First Name: </label>
                                    <input
                                        id="firstname"
                                        type="text"
                                        value={tourUsername}
                                        onChange={(e) => setTourUsername(e.target.value)}
                                    /><br />
                                    <label id="tourcode">Tour Code: </label>
                                    <input
                                        id="tourcode"
                                        type="password"
                                        value={tourPassword}
                                        onChange={(e) => setTourPassword(e.target.value)}
                                    /><br />
                                    <center><Button variant="success" size="lg" onClick={() => handleLogin()}>Submit</Button></center><br />
                                    <center><a href='/register' target="_blank" rel="noopener noreferrer">
                                        <Button variant="success" size="lg" className="register-button">Create Account</Button>
                                    </a></center>

                                </div>
                            )}
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
