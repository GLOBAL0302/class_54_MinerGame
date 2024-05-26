
import './App.css'
import React from 'react';
import {ICard} from './types';
import Card from './Components/Card/Card';

const createItems = ()=>{
  let gameArray:ICard[] = []
  for(let i = 0; i < 36; i++){
    gameArray.push({hasItem: false, clicked: false})
  }
  let hiddenNum:number = Math.floor(Math.random() * (gameArray.length - 1))
  gameArray[hiddenNum].hasItem = true;
  return gameArray
}

function App() {
  const [items, setItems] = React.useState(createItems())

  return (
    <>
      <div className='d-flex gap-2 flex-wrap' style={{maxWidth:"650px"}}>
        {items.map((item:ICard, index:number) =>(
          <Card
            key={index}
            item={item}
          />
        ))}
      </div>
    </>
  )
}

export default App
