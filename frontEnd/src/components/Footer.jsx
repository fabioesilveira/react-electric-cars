
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <footer>
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Help the 🌎, GoEletric! 🚗⚡</Card.Title>
                    <Card.Text>
                        © 2024 project GoEletric by <a href="https://github.com/fabioesilveira">Fabio Silveira,</a>
                        <a href="https://github.com/betim009"> and Alberto Couto.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </footer>
    )
};

export default Footer;