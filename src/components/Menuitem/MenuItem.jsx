import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, tags, description }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
      {description && (
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
          {description}
        </p>
      )}
    </div>
  </div>
);

export default MenuItem;
