import { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as Auth from '../utils/Auth';

const App = () => {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [statusReg, setStatusReg] = useState('');

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      tokenCheck(jwt);
    }
    // eslint-disable-next-line
  }, [loggedIn]);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .setLike(card._id, isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((item) => (item._id === card._id ? newCard : item)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditProfileClick = () => setisEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setisAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setisEditAvatarPopupOpen(true);
  const handleToolTips = () => setIsInfoTooltip(true);

  const closeAllPopups = () => {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsInfoTooltip(false);
  };

  const handleUpdateUser = (currentUser) => {
    api
      .setUserInfo(currentUser.name, currentUser.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateAvatar = (currentUser) => {
    api
      .setNewAvatar(currentUser.avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = (card) => {
    api
      .addCard(card.name, card.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const tokenCheck = (jwt) => {
    if (jwt) {
      Auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setUserData({
              email: res.data.email,
            });
            handleLogin();
            history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in');
  };

  const onRegister = (email, password) => {
    Auth.register(email, password)
      .then((res) => {
        if (res.data) {
          handleToolTips();
          history.push('/sign-in');
          setTimeout(closeAllPopups, 2000);
        } else {
          setStatusReg('success');
          handleToolTips();
          setTimeout(closeAllPopups, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onLogin = (email, password) => {
    Auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleLogin();
          history.push('/main');
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusReg('success');
        handleToolTips();
        setTimeout(closeAllPopups, 2000);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header userData={userData} signOut={signOut} />
          <InfoTooltip isOpen={isInfoTooltip} onClose={closeAllPopups} statusReg={statusReg} />
          <Switch>
            <Route exact path="/sign-in">
              <Login handleLogin={handleLogin} title="Вход" button="Войти" onLogin={onLogin} />
            </Route>
            <Route exact path="/sign-up">
              <Register title="Регистрация" button="Зарегистрироваться" onRegister={onRegister} />
            </Route>
            <Route exact path="/">
              {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}
            </Route>
            <ProtectedRoute
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={setSelectedCard}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
              exact
              path="/main"
              loggedIn={loggedIn}
              component={Main}></ProtectedRoute>
          </Switch>
          <Footer />
          {isEditProfilePopupOpen && (
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
          )}
          {isAddPlacePopupOpen && (
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
            />
          )}
          {isEditAvatarPopupOpen && (
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
          )}
          <PopupWithForm name="delete" title="Вы уверены?" onClose={closeAllPopups} />
          {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} />}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};
export default App;
