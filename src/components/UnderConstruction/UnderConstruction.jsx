import React from 'react';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: 20,
  background: 'linear-gradient(135deg, #f8fafc 0%, #fff 100%)',
};

const headingStyle = { fontSize: 40, margin: 0 };
const paragraphStyle = { fontSize: 18, color: '#555', marginTop: 12 };

const UnderConstruction = () => (
  <div style={containerStyle}>
    <h1 style={headingStyle}>Site en construction</h1>
    <p style={paragraphStyle}>Nous travaillons activement sur ce site. Revenez bientôt !</p>
  </div>
);

export default UnderConstruction;
