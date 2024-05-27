import {ICard} from '../../../types';
import React from 'react';

interface Props{
  item:ICard
  onClick:React.MouseEventHandler
}

const Card:React.FC<Props> = ({item, onClick}) => {
  let img = "border border-5 hiddenCard"
  if(item.hasItem === false && item.clicked === true){
    img += " hiddenCard dogImg"
  }else if(item.hasItem === true && item.clicked === true){
    img +=  " hiddenCard catImg"
  }
  return (
    <div
      id='card'
      className={img}
      onClick={onClick}
      >
    </div>
  );
};

export default Card;