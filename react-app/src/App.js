import React
, { useState }// { useState } 
from 'react'

// styles / CSS
import './App.css';
import ChangeMessageState from './components/ChangeMessageState';

// components
// import FirstComponent from './components/FirstComponent';
// import TemplateExpressions from './components/TemplateExpressions';
// import ManageData from './components/ManageData';
// import ListRender from './components/ListRender';
// import Challenge from './components/Challenge';
// import Events from './components/Events';
// import ConditionalRender from './components/ConditionalRender';
// import CarDetails from './components/CarDetails';
// import Fragment from './components/Fragment';
// import Container from './components/Container';
// import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';

// assets
// import Image from "./assets/img1.jpg"

function App() {

  // const [cars] = useState([
  //   { id: 0, brand: "Ferrari", color: "Yellow", newCar: true, km:0},
  //   { id: 1, brand: "KIA", color: "White", newCar: false, km:70000},
  //   { id: 2, brand: "Renault", color: "Blue", newCar: false, km:15000},
  // ])

  // function showMessage() {
  //   console.log("ExecuteFunction parent event")
  // }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      {/* <h1>Hello, World!!!</h1> */}
      {/* <FirstComponent /> */}
      {/* <TemplateExpressions /> */}
      {/* <Events/> */}
      {/* <Challenge/> */}
      <div>
        {/*
          Importing from 'public' folder
          <img src="/img1.jpg" alt="Paisagem" />
        */}
        {/* 
          <img src={Image} alt="Paisagem" />
        */}
        {/* <ManageData/> */}
        {/* <ListRender/> */}
        {/* <ConditionalRender/> */}
        {/* {cars.map((car)=>(
          <CarDetails 
            key= {car.id}
            brand ={car.brand}
            color ={car.color}
            newCar ={car.newCar}
            km ={car.km}
          />
        ))} */}
        {/* <Fragment propFragment="test"/> */}
        {/* <Container myValue="anyText">
          <p>This is the container content</p>
        </Container> */}
        {/* <ExecuteFunction myFunction={showMessage}/> */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
      </div>
    </div>
  );
}

export default App;
