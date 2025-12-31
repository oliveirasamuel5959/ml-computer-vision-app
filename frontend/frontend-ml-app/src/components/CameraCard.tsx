import { useState } from "react";
import AddPlusCameraIcon from '../assets/plus.png';
import './CameraCard.css';
import { RtspCameraForm } from './RtspCameraForm';

export function CameraCard() {

  const [buttonState, setButtonState] = useState(false);

  const handleButtonClick = () => {
    setButtonState(true);
  }

  return (
    <>
      {
        buttonState && (
          <RtspCameraForm />
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