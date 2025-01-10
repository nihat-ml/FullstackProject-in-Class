import React from 'react';

function BlogSection() {
  return (
    <section style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Latest News from our Blog</h2>
      <p style={{ marginBottom: '40px', color: '#555' }}>
        Who are in extremely love with eco-friendly system.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
          }}
        >
          <img
            src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" 
            alt="Blog 1"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f6214b',
                  color: '#fff',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  padding: '5px 10px',
                  marginRight: '10px',
                }}
              >
                Travel
              </span>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f6214b',
                  color: '#fff',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  padding: '5px 10px',
                }}
              >
                Life style
              </span>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
              Portable latest Fashion for young women
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#999' }}>31st January, 2018</p>
          </div>
        </div>

       
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'left',
          }}
        >
          <img
            src="https://preview.colorlib.com/theme/immigration/img/b2.jpg" 
            alt="Blog 2"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f6214b',
                  color: '#fff',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  padding: '5px 10px',
                  marginRight: '10px',
                }}
              >
                Travel
              </span>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#f6214b',
                  color: '#fff',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  padding: '5px 10px',
                }}
              >
                Life style
              </span>
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
              Portable latest Fashion for young women
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#999' }}>31st January, 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
