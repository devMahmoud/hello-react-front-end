import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      <div>
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default Greeting;
