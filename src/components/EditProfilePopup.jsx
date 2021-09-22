import PopupWithForm from './PopupWithForm';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleChangeName = (e) => setName(e.target.value);

  const handleChangeDescription = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить">
      <input
        onChange={handleChangeName}
        value={name || ''}
        type="text"
        placeholder="Имя"
        className="form__item form__name popup__input"
      />
      <span className="form__input-error" id="name-error"></span>
      <input
        onChange={handleChangeDescription}
        value={description || ''}
        type="text"
        placeholder="Вид деятельности"
        className="form__item form__job popup__input"
      />
      <span className="form__input-error" id="job-error"></span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
