
import './App.css'
import React from 'react';
import {ICard} from './types';
import Card from './Components/Card/Card';

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

  const OnClick = (id:number)=>{
    console.log()
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


  return (
    <>
      <h4>Find Cat</h4>
      <div className='d-flex gap-2 flex-wrap' style={{maxWidth:"650px"}}>
        {items.map((item:ICard) =>(
          <Card
            key={item.id}
            item={item}
            onClick={()=>OnClick(item.id)}
          />
        ))}
        <p>Total Tries{items.filter(item=> item.clicked == true).length}</p>
      </div>
    </>
  )
}

export default App
