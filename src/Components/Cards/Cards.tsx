import {ICard} from '../../types';
import Card from './Card/Card';
import React from 'react';

interface Props{
  items:ICard[],
  onClick:(id:number)=>void
}

const Cards:React.FC<Props> = ({items, onClick}) => {
  return (
    <>
      {items.map((item:ICard) =>(
        <Card
          key={item.id}
          item={item}
          onClick={()=>onClick(item.id)}
        />
      ))}
    </>
  );
};

export default Cards;