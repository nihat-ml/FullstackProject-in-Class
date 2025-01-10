import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2'; 
import { favoriteContext } from '../../../Context/FavoritesContext';

function Immigrations() {
  const [immigrants, setImmigrants] = useState([]);
  let  {favorites,setFavorites}=useContext(favoriteContext)
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  function handleAddFavorite(immigrant) {
   
    const findFavorite = favorites.find(favorite => favorite._id === immigrant._id);
    
    if (findFavorite) {
     
      Swal.fire({
        title: 'Already Added!',
        text: 'This immigrant is already in your favorites.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    } else {
      
      setFavorites([...favorites, immigrant]);
    }
  }
  
  

  function getImmigrants() {
    axios.get("http://localhost:3001/immigrations")
      .then((res) => {
        setImmigrants(res.data);
      });
  }

  useEffect(() => {
    getImmigrants();
  }, []);

  const filteredImmigrants = immigrants.filter((immigrant) =>
    immigrant.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedImmigrants = [...filteredImmigrants].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.percent - b.percent;
    } else {
      return b.percent - a.percent;
    }
  });

  
  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this immigrant record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/immigrations/${_id}`)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'The immigrant has been deleted.',
              'success'
            );
            
            setImmigrants(immigrants.filter(immigrant => immigrant._id !== _id));
          })
          .catch((err) => {
            Swal.fire(
              'Error!',
              'There was an issue deleting the immigrant.',
              'error'
            );
            console.error('Error deleting immigrant:', err);
          });
      }
    });
  };

  return (
    <Container>
      <Row>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "40px 0px"
        }}>
          <h2>Requirements to be Immigrants</h2>
          <Button variant="success" onClick={() => navigate('/addpage')}>Add Immigrant</Button>
        </div>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6} className="text-end">
          <Button
            variant="secondary"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            Sort by Percent ({sortOrder === 'asc' ? 'More' : 'Less'})
          </Button>
        </Col>
      </Row>

      <Row>
        {sortedImmigrants.map((immigrant) => (
          <Col key={immigrant._id} md={4} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={immigrant.image} />
              <Card.Body>
                <Card.Title>{immigrant.country}</Card.Title>
                <Card.Text>{immigrant.description}</Card.Text>
                <Card.Text>%{immigrant.percent}</Card.Text>
                <Button variant="primary" onClick={() => navigate(`/immigrations/:id`)}>Detail</Button>
                <Button variant="danger" onClick={() => handleDelete(immigrant._id)}>Delete</Button>
                <Button variant="warning">Edit</Button>
                <FaHeart onClick={()=> handleAddFavorite(immigrant)}
                  style={{
                    cursor: 'pointer',
                    color: "red",
                    fontSize: '1.5rem',
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Immigrations;
