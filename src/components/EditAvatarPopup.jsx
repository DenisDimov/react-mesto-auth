import { useEffect } from 'react';
import { useFormWithValidation } from '../hooks/useForm';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  useEffect(() => {
    resetForm()
  }, [isOpen, resetForm])

  const HandleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: values.url,
    });
  };

  return (
    <PopupWithForm
      onSubmit={HandleSubmit}
      title="Обновить аватар"
      isDisabled={!isValid}
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить">
      <input
        onChange={handleChange}
        required
        name="url"
        id="avatar"
        value={values.url || ''}
        type="url"
        placeholder="Название"
        className={`form__item popup__input ${errors.url && 'popup__input_type_error'}`}
      />
      <span
        className={`form__input-error ${errors.url && 'form__input-error_active'}`}
        id="avatar-error">
        {errors.url}
      </span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
