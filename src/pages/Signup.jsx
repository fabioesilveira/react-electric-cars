import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
    const [userName, setUserName] = useState("Fabio");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleClick(event) {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const isValidEmail = (email) => emailRegex.test(email);
        const isValidPassword = (password) => passwordRegex.test(password);

        if (!isValidEmail(userEmail)) {
            return alert ("Please enter a valid email!!")
        }

        if (!isValidPassword(userPassword)) {
            return alert ("Please you password must container 8 digits a special character a uppercase letter and numbers")
        }
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={userName}
                            onChange={({ target }) => setUserName(target.value)} />
                    </Form.Group>
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
                        Register
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Signup;