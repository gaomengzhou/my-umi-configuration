import { Button } from 'antd-mobile';
import React, { useState } from 'react';

const Home = () => {
  const [state, setState] = useState({
    name: 10,
    age: 24
  });
  const [count, setCount] = useState(12)
  const toSetState = () => {
    setState({ ...state, name: state.name + 1 })
  }
  console.log(state, count)
  return (
    <div>
      home-home-home-home
      <button onClick={() => console.log(process.env.apiUrl)}>click</button>
      <button onClick={() => console.log(process.env.NODE_ENV)}>click</button>
      <Button onClick={toSetState}>
        Hook test
      </Button>
      <Button onClick={() => setCount(count + 10)}>
        Hook test2
      </Button>
    </div>
  )
}
export default Home
