import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitleAction, withParamsAction } from '../../redux/reducers/actions';

function MainPage() {
  const title = useSelector(state => state.title);
  const dispatch = useDispatch();

  const changeTitle = () => {
    dispatch(changeTitleAction());
  };

  const withParams = () => {
    dispatch(withParamsAction("Hello world"));
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Изменить название</button>
      <button onClick={withParams}>С параметрами</button>
    </div>
  );
}

export default MainPage;

