import React, { useContext } from 'react';
import { favoriteContext } from '../../../Context/FavoritesContext';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

function Favorites() {
  const { favorites, setFavorites } = useContext(favoriteContext); 
  const navigate = useNavigate();

  const handleRemoveFavorite = (id) => {
   
    setFavorites(favorites.filter(favorite => favorite._id !== id));
  };

  return (
    <Container>
      <Row>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '40px 0px' }}>
          <h2>Favorite Immigrants</h2>
        </div>
      </Row>

      <Row>
        {favorites.length === 0 ? (
          <Col>
            <p>No products found in your favorites.</p>
          </Col>
        ) : (
          favorites.map((immigrant) => (
            <Col key={immigrant._id} md={4} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={immigrant.image} />
                <Card.Body>
                  <Card.Title>{immigrant.country}</Card.Title>
                  <Card.Text>{immigrant.description}</Card.Text>
                  <Card.Text>%{immigrant.percent}</Card.Text>

                  
                  <FaRegHeart
                    onClick={() => handleRemoveFavorite(immigrant._id)} 
                    style={{
                      cursor: 'pointer',
                      color: 'gray',
                      fontSize: '1.5rem',
                    }}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default Favorites;
