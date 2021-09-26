import PopupWithForm from './PopupWithForm';
import { useFormWithValidation } from '../hooks/useForm';
import { useEffect } from 'react';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm()
  }, [isOpen, resetForm])

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: values.place,
      link: values.Link,
    });
  };

  return (
    <PopupWithForm
      isDisabled={!isValid}
      name="new-card"
      title="Новое место"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      buttonText="Сохранить">
      <input
        onChange={handleChange}
        required
        minLength='2'
        maxLength='30'
        value={values.place || ''}
        type="text"
        id="place-name"
        name="place"
        placeholder="Название"
        className={`form__item popup__input ${errors.place && 'popup__input_type_error'}`}
      />
      <span className={`form__input-error ${errors.place && 'form__input-error_active'}`} id="place-name-error">
        {errors.place}
      </span>
      <input
        onChange={handleChange}
        required
        value={values.Link || ''}
        type="url"
        id="place-link"
        name="Link"
        placeholder="Ссылка на картинку"
        className={`form__item popup__input ${errors.Link && 'popup__input_type_error'}`}
      />
      <span className={`form__input-error ${errors.Link && 'form__input-error_active'}`} id="place-link-error">
        {errors.Link}
      </span>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
