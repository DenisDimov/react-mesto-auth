const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup_type_image ${card && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_image">
        <button
          onClick={onClose}
          className="popup__close popup__close_image"
          type="button"></button>
        <img alt={`${card ? card.name : ''}`} className="popup__image" src={`${card ? card.link : ''}`}></img>
        <h3 className="popup__image-title">{`${card ? card.name : ''}`}</h3>
      </div>
    </div>
  );
};

export default ImagePopup;
