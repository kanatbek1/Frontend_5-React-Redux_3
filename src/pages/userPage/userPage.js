import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberAction, clearNumbersAction } from "../../redux/reducers/actions"; 
function UserPage() {
  const { numbers } = useSelector((state) => state.numberReducer);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const changeInput = (event) => {
    setInputValue(event.target.value);
  };
  const addNumber = () => {
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      dispatch(addNumberAction(number)); 
      setInputValue("");
    }
  };
  const clearNumbers = () => {
    dispatch(clearNumbersAction()); 
  };
  return (
    <div>
      {numbers.map((number, idx) => (
        <div key={idx}>{number}</div>
      ))}
      <input type="number" placeholder="Число" value={inputValue} onChange={changeInput} />
      <button onClick={addNumber}>добавить</button>
      <button onClick={clearNumbers}>удалить все</button>
    </div>
  );
}

export default UserPage;
