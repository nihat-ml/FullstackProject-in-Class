import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

function DetailPage() {
  const { _id } = useParams();  
  const [immigrant, setImmigrant] = useState(null);

  useEffect(() => {
    
    axios.get(`http://localhost:3001/immigrations/${_id}`)
      .then((res) => {
        setImmigrant(res.data);  
      })
      .catch((error) => {
        console.error("Error fetching immigrant details:", error);
      });
  }, [_id]); 

  if (!immigrant) {
    return <div>Loading...</div>;  
  }

  return (
    <div>
      <h2>{immigrant.country} Details</h2>
      <img src={immigrant.image} alt={immigrant.country} width="300" />
      <p>{immigrant.description}</p>
      <p>Percent: {immigrant.percent}%</p>
    </div>
  );
}

export default DetailPage;
