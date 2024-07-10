import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signin() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleClick(event) {
        event.preventDefault();

        const localStorageUser = JSON.parse(localStorage.getItem("user"))
        alert(localStorageUser.user)
    }
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={userEmail}
                            onChange={({ target }) => setUserEmail(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={userPassword}
                            onChange={({ target }) => setUserPassword(target.value)} />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={handleClick}
                    >
                        Signin
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Signin;