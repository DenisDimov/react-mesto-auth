import success from '../image/success.png';
import fail from '../image/fail.png';

const InfoTooltip = ({ isOpen, onClose, statusReg }) => {
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ''}`}>
      <div className="popup__container popup__container_type_reg">
        {statusReg === '' ? (
          <>
            <img src={success} className="popup__registration" alt="успешно"></img>
            <button onClick={onClose} className="popup__close"></button>
            <p className="popup__title popup__title_type_reg">Вы успешно зарегистрировались!</p>
          </>
        ) : (
          <>
            <img src={fail} className="popup__registration" alt="попробуйте еще раз"></img>
            <button onClick={onClose} className="popup__close"></button>
            <p className="popup__title popup__title_type_reg">
              Что-то пошло не так! Попробуйте еще раз!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoTooltip;
