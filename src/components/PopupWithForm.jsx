const PopupWithForm = ({ name, title, isOpen, children, onClose, onSubmit, buttonText, isDisabled }) => {
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ''}`}>
      <div className="popup__container">
        <button className="popup__close popup__close_edit" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="form form_type_edit popup__form" name={`${name}`} onSubmit={onSubmit} noValidate>
          {children}
          <button className={`form__btn popup__button ${isDisabled && `form__submit_inactive`}`} type="submit" disabled={isDisabled}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
