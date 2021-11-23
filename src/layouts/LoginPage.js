import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../img/logo.png'
import LoginBackground from '../img/loginBackground.png'
import Google from '../img/googleLogo.png'


function LoginPage() {
    return (
        <div>
            <Navbar className="navbarLogin">
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <div className="tags">
                            <a className="tag" href="">Cara menggunakan nova freelancer ?</a>
                            <a className="tag" href="">Daftar sebagai Freelancer</a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="content">
                <div className="sideLeft">
                    <p>Welcome back</p>
                    <h1>Login to your account</h1>
                    <form action="/home">
                        <label htmlFor="">Email</label><br />
                        <div className="box">
                            <input className="inputForm" type="text" /></div>
                        <label htmlFor="">Password</label>
                        <div className="box">
                            <input className="inputForm" type="password" /></div><br />

                        <div className="side">
                            <div className="start">
                                <input type="checkbox" class="checkbox-round" /> <p> Remember Me</p>
                            </div>
                            <a href="">Forgot Password ?</a>
                        </div>
                        <input className="submitButton" type="submit" value="Login Now" />
                        
                        <br />
                        <div className="button">
                            <img src={Google} alt="" />
                            <a href="">Or sign-in with google</a>
                        </div>
                    </form>

                    <div className="join">
                        <p>Dont have an account? <span>Join free today</span></p>
                    </div>
                </div>
                <div className="sideRight">
                    <img src={LoginBackground} alt="" />
                </div>
            </div>

        </div>

    )
}

export default LoginPage
