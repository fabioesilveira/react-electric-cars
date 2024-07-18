import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Signin() {
    // const [userName, setUserName] = useState("");
    // const [userEmail, setUserEmail] = useState("");
    // const [userPassword, setUserPassword] = useState("");

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
            <Container>
                <Form>
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
                        Signin
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Signin;