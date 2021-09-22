import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    e.currentTarget.reset();
  };

  return (
    <PopupWithForm
      onSubmit={HandleSubmit}
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить">
      <input
        ref={avatarRef}
        type="url"
        placeholder="Название"
        className="form__item popup__input popup__avatar"
      />
      <span className="form__input-error" id="avatar-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
