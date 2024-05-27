
import './App.css'
import React from 'react';
import {ICard} from './types';
import Cards from './Components/Cards/Cards';
import ModalWindow from './Components/ModalWindow/ModalWindow';

const createItems = ()=>{
  let gameArray:ICard[] = []
  for(let i = 0; i < 36; i++){
    gameArray.push({hasItem: false, clicked: false, id: i})
  }
  let hiddenNum:number = Math.floor(Math.random() * (gameArray.length - 1))
  gameArray[hiddenNum].hasItem = true;
  return gameArray
}

function App() {
  const [items, setItems] = React.useState(createItems())
  const restartGame =()=>{
    setItems(createItems())
  }

  const OnClick = (id:number)=>{
    setItems((prevState)=>{
      return prevState.map((item)=>{
        if(item.id === id){
          return{
            ...item,
            clicked: true
          }
        }
        return item
      })
    })
  }
  let checkGameEnd = items.filter(item=> item.clicked === true && item.hasItem === true).length;

  return (
    <>
      <h4>Find Cat</h4>
      <div className='d-flex gap-2 flex-wrap' style={{maxWidth:"650px"}} id="content">
        <Cards
          items={items}
          onClick={OnClick}
        />
        <p>Total Tries: {items.filter(item=> item.clicked == true).length}</p>
        <ModalWindow items={items} checkGameEnd={checkGameEnd} restartGame={restartGame}/>
      </div>
    </>
  )
}

export default App
