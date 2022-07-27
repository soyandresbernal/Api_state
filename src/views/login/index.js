import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfUserIsAuth } from '../../redux/actions/login';

export default function login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.loginReducer);

  const checkIfUserIsAuthRef = useRef();

  const checkIfUserIsAuth = () => {};
}
checkIfUserIsAuthRef.current = checkIfUserIsAuth;

useEffect(() => {
  dispatch(checkIfUserIsAuth());
}, []);

useEffect(() => {
  if (isAuth) {
    history.push('/search');
  }
}, [state.isAuth]);
const handleSubmitForm = (evt) => {
  evt.preventDefault();
  localStorage.setItem('superhero-isAuth', 'true');
};
