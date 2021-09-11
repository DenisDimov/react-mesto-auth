import Card from './Card';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import { useContext } from 'react';


const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) => {
  const currentUser = useContext(CurrentUserContext);
 
  return (
    <main className="content">
      <section className="profile">
        <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
        <div onClick={onEditAvatar} className="profile__avatar-edit"></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button onClick={onEditProfile} className="profile__btn" type="button"></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-card" type="button"></button>
      </section>
      <section className="cards">
        <ul className="card">
          {cards.map((card) => {
            return (
              <Card key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} card={card} onCardDelete={onCardDelete}/>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
