import {ICard} from '../../types';
import React from 'react';

interface Props{
  items:ICard[]
}
const TotalAttempts:React.FC<Props> = ({items}) => {
  let totalAttempts = items.filter(item=> item.clicked == true).length
  return (
    <>
      <h4>You have Made <span style={totalAttempts < 5?{color:"green"}: {color:"red"}}>{totalAttempts}</span> Attempts</h4>
    </>
  );
};

export default TotalAttempts;