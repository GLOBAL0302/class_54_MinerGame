import "./ModalWindow.modules.css"
import {ICard} from '../../types';
import React from 'react';

interface Props{
  items:ICard[]
  checkGameEnd:number,
  restartGame:()=>void
}
const ModalWindow:React.FC<Props> = ({items, restartGame, checkGameEnd}) => {
  return (
    <>
      <div id="modalWindow" style={checkGameEnd?{display:"block"}: {display:"none"}}>
        <div className="border border-5 p-4" id="modalContent">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">The Game is over</h5>
              </div>
              <div className="modal-body">
                <p>Congratulations you have made {items.filter(item=> item.clicked).length} attempt and found him</p>
                <img src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" alt="cat" style={{width:"150px"}}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={restartGame}>Restart the Game</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;