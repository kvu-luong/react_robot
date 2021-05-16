import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  const cardArray = robots.map( (robot, i) => {
    return (
      <Card 
        key={robot[i].id} 
        id={robot[i].id} 
        name={robot[i].name} 
        email={robot[i].email} 
      />
      );
  });

  return (
    <div>
       { cardArray }
    </div>
  );
}

export default CardList;