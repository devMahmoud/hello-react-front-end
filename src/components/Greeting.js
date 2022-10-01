import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingData } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetingData());
  }, []);

  return (
    <h1>{greeting.message}</h1>
  );
};

export default Greeting;
