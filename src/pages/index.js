import React from 'react';
const Home = () => {
  console.log(process.env.apiUrl)
  return (
    <div>
      home
      <button onClick={() => console.log(process.env.apiUrl)}>click</button>
      <button onClick={() => console.log(process.env.NODE_ENV)}>click</button>
    </div>
  )
}
export default Home
