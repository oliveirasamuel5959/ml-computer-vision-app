import { useState } from "react";
import AddPlusCameraIcon from '../assets/plus.png';
import './CameraCard.css';
import { AddVideoStreamModal } from './AddVideoStreamModal';

export function CameraCard() {

  const [buttonState, setButtonState] = useState(false);

  const handleButtonClick = () => {
    setButtonState(true);
  }

  return (
    <>
      {
        buttonState && (
          <AddVideoStreamModal 
            isOpen={isOpenModal}
            onClose={() => setIsModalOpen(false)}
            onCreate={(data) => console.log("creating stream", data)}
          />
        )}
      {!buttonState && (
          <div className='card-container'>
            <div className='card'>  
              <button onClick={handleButtonClick} className="add-camera-button">
                <img src={AddPlusCameraIcon} alt="Adicionar" />
              </button>
              <div className='card-content'>
                <h3>Add Camera</h3>
              </div>
            </div>
          </div>
        )}
    </>
  )
}