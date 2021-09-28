import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext } from 'react';

const Card = ({ onCardClick, onCardLike, card, onCardDelete }) => {
  const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete ${isOwn ? `card__delete_active` : ''}`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__icon ${isLiked ? `card__icon_active` : `card__icon`}`;

  return (
    <li className="card__item">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}></div>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}></button>
      <div className="card__inner">
        <h3 className="card__title">{card.name}</h3>
        <div className="card__container-likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}></button>
          <p className="card__like">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
