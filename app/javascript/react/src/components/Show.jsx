import React from 'react';

const Show = ({ anime }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4 className="text-center">ANIME:</h4>
          <h6>{anime?.anime}</h6>
          <h4 className="text-center">PERSONAGEM:</h4>
          <h6>{anime?.character}</h6>
          <h4 className="text-center">CITAÇÃO:</h4>
          <h6>{anime?.quote}</h6>
        </div>
      </div>
    </div>
  );
};

export default Show;
