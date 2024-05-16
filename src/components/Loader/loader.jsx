import React, { useReducer, useEffect } from 'react';
import { MutatingDots } from 'react-loader-spinner';

const initialState = { isLoading: false };

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { isLoading: true };
    case 'FINISH':
      return { isLoading: false };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('state:', state);
  }, [state]);

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  const handleFinish = () => {
    dispatch({ type: 'FINISH' });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleFinish}>Finish</button>
      {state.isLoading && <Loader />}
    </div>
  );
}

function Loader() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default App;
