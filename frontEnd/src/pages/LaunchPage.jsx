import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from '../data/data';
import { NavLink } from 'react-router-dom';
import Signin from './Signin';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Footer from '../components/Footer';


function LaunchPage() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleChange({ target }) {

        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
    }


    async function handleClick(event) {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/users/login", form)
            console.log(response.data)
            return alert(response.data.message)
        } catch (error) {
            console.error("error to post: ", error)
        }
    }

    return (
        <>

            <Navbar className="navbar" data-bs-theme="light">

                <img src={logo} alt="Bootstrap" width="65" height="50"></img>
                <Navbar.Brand as={NavLink} to="/">GoEletric</Navbar.Brand>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/launchpage" >SIGNIN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/signup" eventKey="link-1">SIGNUP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            BE SMART AND GO ELECTRIC!
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>

            <Card className="text-center">
                <Card.Header></Card.Header></Card>

            <div>

                <Container>
                <h2 className="h2-signin-page">Welcome  to GoElectric, signin with your registered account.</h2>
                    <Card className="card-launch-page">
                        <Container>
                            <Form className="form-launch-page">
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange} />
                                </Form.Group>

                                <Button
                                    className="btn-launch-page"
                                    variant="primary"
                                    type="submit"
                                    onClick={handleClick}
                                >
                                    Signin
                                </Button>
                            </Form>
                        </Container>
                    </Card>
                </Container>


            </div>

            <Footer />




        </>
    )
}

export default LaunchPage;