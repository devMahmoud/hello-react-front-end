const GET_GREETINGS = 'redux/greetings/GET_GREETINGS';
const url = 'http://127.0.0.1:3000/greetings';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export const getGreeting = () => async (dispatch) => {
  const response = await fetch(url, {
    mode: 'no-cors',
  });
  const greeting = await response.json();
  dispatch({
    type: GET_GREETINGS,
    payload: greeting,
  });
};

export default reducer;
