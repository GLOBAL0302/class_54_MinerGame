import {ICard} from '../../types';
import React from 'react';

interface Props{
  item:ICard
}

const Card:React.FC<Props> = ({item}) => {
  console.log(item);
  return (
    <div id='card' style={{width:"100px", height:"100px", background:"black"}}>

    </div>
  );
};

export default Card;