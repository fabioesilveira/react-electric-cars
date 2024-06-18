import { cars } from "./data";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainPage() {
    return (
        <main>
            <Container>
                <Row>
                    {cars.map((element, index) => (
                        <Col lg={4} md={6} sm={12}>
                            <h2>{element.car}</h2>
                            <Button variant="success" onClick={() => alert("hello world")}>Success</Button>{' '}
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
    )
};

export default MainPage;