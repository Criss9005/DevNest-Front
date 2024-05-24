<<<<<<< HEAD
/* // src/components/Loader/Loader.jsx
import React from 'react';
import { Oval } from 'react-loader-spinner'; // Asegúrate de tener instalada esta dependencia

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
 */
=======
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
      color="#fc842d"
      secondaryColor="##fc842d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default App;
>>>>>>> Dev
