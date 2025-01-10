import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { FaHeart } from 'react-icons/fa';

function Immigrations() {

    const [immigrants, setImmigrant] = useState([])

    function getImmigrants(){
        axios.get("http://localhost:3001/immigrations")
        .then((res)=>{
            setImmigrant(res.data)
        })
    }

    useEffect(()=>{
        getImmigrants();
    },[])

    return (
        <Container>
          <Row>
          <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "40px 0px"
            }
            }>
                <h2>Requirements to be Immigrants</h2>
            </div>
            {immigrants.map((immigrant)=>
            <Col>
            
            <Card style={{ width: '18rem', margin: "5% 0%" }}>
                <Card.Img variant="top" src={immigrant.image} />
                <Card.Body>
                <Card.Title>{immigrant.country}</Card.Title>
                <Card.Text>
                            {immigrant.description}
                </Card.Text>
                <Card.Text>
                            %{immigrant.percent}
                </Card.Text>
                        <Button variant="primary">Detail</Button>
                        <Button variant="danger">Delete</Button>
                        <Button variant="warning">Edit</Button>
                        <FaHeart
                            
                                        style={{
                                            cursor: 'pointer',
                                            color: "red",
                                            fontSize: '1.5rem',
                                        }}
                                    />
                 </Card.Body>
                </Card>
            </Col>)}
          </Row>
        </Container>
      );
}

export default Immigrations