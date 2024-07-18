import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function Signup() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange({ target }) {

        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        })
        console.log(value, name)
    }

    async function handleClick(event) {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const isValidEmail = (email) => emailRegex.test(email);
        const isValidPassword = (password) => passwordRegex.test(password);

        if (!isValidEmail(form.email)) {
            return alert("Please enter a valid email!!")
        }

        if (!isValidPassword(form.password)) {
            return alert("Please you password must container 8 digits a special character a uppercase letter and numbers")
        }

       try {
        const response = await axios.post("http://localhost:3000/users", form)
        console.log(response.data)
        return alert(response.data.message)
       } catch (error) {
        console.error("error to post: ", error)
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
                            name="name"
                            value={form.name}
                            onChange={handleChange} />
                    </Form.Group>
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