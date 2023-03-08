import React, { useState } from 'react';
import "./../style/Home.css";

const Home = () => {
  const [name, setName] = useState("Initial");
  const [email, setEmail] = useState("xyz@mail.com");

  return (
    <div>
      <form>
        <input type="text" placeholder='Initial' onChange={(e) => setName(e.target.value)}/>
        <input type="Email" placeholder='xyz@gmail.com'onChange={(e) => setEmail(e.target.value)}/>
      </form>
      <button onClick={(e) => setName(e.target.value)}>Pressed</button>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default Home
