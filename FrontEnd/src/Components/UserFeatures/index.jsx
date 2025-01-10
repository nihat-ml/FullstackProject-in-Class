import React from 'react';
import { FaUserTie, FaTools, FaHeadset, FaStar, FaComments, FaLaptopCode } from 'react-icons/fa';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Our Unique Features that can impress you</h2>
      <p style={{ marginBottom: '40px', color: '#555' }}>
        Who are in extremely love with eco-friendly system.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaUserTie style={{ fontSize: '2.5rem', color: '#f6214b', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
            Expert Technicians
          </h3>
          <p style={{ color: '#777' }}>
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            power.
          </p>
        </div>

        
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaLaptopCode style={{ fontSize: '2.5rem', color: '#f6214b', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
            Professional Service
          </h3>
          <p style={{ color: '#777' }}>
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            power.
          </p>
        </div>

     
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaHeadset style={{ fontSize: '2.5rem', color: '#f6214b', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
            Great Support
          </h3>
          <p style={{ color: '#777' }}>
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            power.
          </p>
        </div>

       
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaTools style={{ fontSize: '2.5rem', color: '#f6214b', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
            Technical Skills
          </h3>
          <p style={{ color: '#777' }}>
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            power.
          </p>
        </div>

       
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaStar style={{ fontSize: '2.5rem', color: '#f6214b', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
            Highly Recommended
          </h3>
          <p style={{ color: '#777' }}>
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            power.
          </p>
        </div>

       
        <div
          style={{
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <FaComments style={{ fontSize: '2.5rem', color: '#f6214b', marginBottom: '10px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>
            Positive Reviews
          </h3>
          <p style={{ color: '#777' }}>
            Usage of the Internet is becoming more common due to rapid advancement of technology and
            power.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
