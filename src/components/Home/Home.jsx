import React from 'react'
import "./Home.css"  ;
  
  function User({name}){
    return <h3>{name}</h3>
  }

const Home = () => {
  return (
    <>
    
      <p>User name={"Apex"}</p>
        <User   name="John Doe" />
      <h2 className="text-center mt-4">Home Page</h2>
    </>
  )
}

export default Home