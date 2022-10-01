import getData from '../../services/GreetingService';

const GET_GREETING_DATA = 'hello-react-front-end/greetings/GET_GREETING_DATA';

export const getGreetingData = () => async (dispatch) => {
  try {
    const res = await getData();
    const message = await res.json();
    dispatch({
      type: GET_GREETING_DATA,
      message,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default function greetingReducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_GREETING_DATA:
      return action.message;
    default: return state;
  }
}
