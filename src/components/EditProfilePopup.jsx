import PopupWithForm from './PopupWithForm';
import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useFormWithValidation } from '../hooks/useForm';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      description: currentUser.about,
    });
    // eslint-disable-next-line
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.description,
    });
  };

  return (
    <PopupWithForm
      isDisabled={!isValid}
      onSubmit={handleSubmit}
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить">
      <input
        required
        minLength="2"
        onChange={handleChange}
        id="name"
        name="name"
        value={values.name || ''}
        type="text"
        placeholder="Имя"
        className={`form__item popup__input ${errors.name && 'popup__input_type_error'}`}
      />
      <span
        className={`form__input-error ${errors.name && 'form__input-error_active'}`}
        id="name-error">
        {errors.name}
      </span>
      <input
        minLength="2"
        required
        onChange={handleChange}
        id="job"
        name="description"
        value={values.description || ''}
        type="text"
        placeholder="Вид деятельности"
        className={`form__item popup__input ${errors.description && 'popup__input_type_error'}`}
      />
      <span
        className={`form__input-error ${errors.description && 'form__input-error_active'}`}
        id="job-error">
        {errors.description}
      </span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
