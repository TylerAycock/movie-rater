import Modal from "./Modal";
import {useNavigate} from 'react-router-dom'

const PopUp = ({setModal, modal}) => {
    const navigate = useNavigate()

    const toggleModal = () => {
        setModal(!modal);
      };
    
  return (
    <Modal>
      <h2>Would you like to rate this movie?</h2>
      <div className="yn-btn">
        <button onClick={()=>navigate('/review')}>Yes</button>
        <button onClick={()=>toggleModal()}>No</button>
      </div>
    </Modal>
  );
};

export default PopUp