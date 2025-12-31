import AddPlusCameraIcon from '../assets/plus.png';
import './CameraCard.css';

export function CameraCard() {
  return (
    <>
      <div className='card-container'>
        <div className='card'>
          <button className="add-camera-button">
            <img src={AddPlusCameraIcon} alt="Adicionar" />
          </button>
          <div className='card-content'>
            <h3>Add Camera</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </>
  )
}