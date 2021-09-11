import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeLink = (e) => setLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
    setName('');
    setLink('');
  };

  return (
    <PopupWithForm
      name="new-card"
      title="Новое место"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}>
      <>
        <input
          onChange={handleChangeName}
          value={name || ''}
          type="text"
          id="place"
          name="place"
          placeholder="Название"
          className="form__item form__place popup__input"
        />
        <span className="form__input-error" id="place-error"></span>
        <input
          onChange={handleChangeLink}
          value={link || ''}
          type="url"
          id="link"
          name="Link"
          placeholder="Ссылка на картинку"
          className="form__item form__link popup__input"
        />
        <span className="form__input-error" id="link-error"></span>
        <button className="form__btn popup__button" id="form-addBtn" type="submit">
          Сохранить
        </button>
      </>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
