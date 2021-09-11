
const PopupWithForm = ({name, title, isOpen, children, onClose, onSubmit}) => {
  
  return (
  <div className={`popup ${isOpen ? `popup_opened` : ''}`} >
    <div className="popup__container">
      <button className="popup__close popup__close_edit" type="button" onClick={onClose}></button>
      <h2 className="popup__title">{title}</h2>
      <form className="form form_type_edit popup__form" name={`${name}`} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  </div>
  )
}

export default PopupWithForm