import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {

  const avatarRef = useRef();

  const HandleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    e.currentTarget.reset()
  };

  return (
    <PopupWithForm
      onSubmit={HandleSubmit}
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}>
        <>
          <input
            ref={avatarRef}
            type="url"
            placeholder="Название"
            className="form__item popup__input popup__avatar"
          />
          <span className="form__input-error" id="avatar-error"></span>
          <button className="form__btn popup__button" id="avatar-btn" type="submit">
            Сохранить
          </button>
        </>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
