import Form from 'react-bootstrap/Form';
import { Card, Container } from "react-bootstrap";
import Footer from './Footer';
import NavBar from './Navbar';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <>

            <NavBar />

            <Container>
                <Card className="contact-form-card">
                    <Form className="contact-form">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="goElectric@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <div className="d-grid gap-2 div-contact-btn">
                        <Button variant="primary" size="md">
                            Submit Message
                        </Button>

                    </div>
                </Card>
            </Container>

            <Footer />
        </>
    )
}

export default Contact;