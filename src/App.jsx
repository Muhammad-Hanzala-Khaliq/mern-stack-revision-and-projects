import React from 'react'
import Todo from './components/Todo'
import TodoNewVersionRedux from "./components/TodoNewVersionRedux";

const App = () => {
  return (
    <>
      {/* old version of redux */}
      {/* <Todo/> */}
      {/* redux toolkit */}
      <TodoNewVersionRedux />
    </>
  );
}

export default App