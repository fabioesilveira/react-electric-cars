import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {

    const [form, setForm] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });

    function handleChange({ target }) {

        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
        console.log(value, name)
    }

    function handleClick(event) {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const isValidEmail = (email) => emailRegex.test(email);
        const isValidPassword = (password) => passwordRegex.test(password);

        if (!isValidEmail(form.userEmail)) {
            return alert("Please enter a valid email!!")
        }

        if (!isValidPassword(form.userPassword)) {
            return alert("Please you password must container 8 digits a special character a uppercase letter and numbers")
        }

        localStorage.setItem("user", JSON.stringify(form))
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
                            name="userName"
                            value={form.userName}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="userEmail"
                            value={form.userEmail}
                            onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="userPassword"
                            value={form.userPassword}
                            onChange={handleChange} />
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