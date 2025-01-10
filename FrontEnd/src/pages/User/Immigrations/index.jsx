import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Immigrations() {
    return (
        <Container>
          <Row>
            <Col>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
            }>
                <h2>Requirements to be Immigrants</h2>
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                 </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                 </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      );
}

export default Immigrations