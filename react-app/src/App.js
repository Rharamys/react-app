import React, { useState , useEffect } 
from 'react'

// styles / CSS
import './App.css';

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
// import Message from './components/Message';
// import ChangeMessageState from './components/ChangeMessageState';
// import StyledComponent from './components/StyledComponent';
// import Title from './components/Title';
// import MyForm from './components/MyForm';

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

  // const [message, setMessage] = useState("")

  // const handleMessage = (msg) => {
  //   setMessage(msg)
  // }

  // let n = 15;
  // let redTitle = true;

  const [products, setProducts] = useState([])
  const url = "http://localhost:3000/products"
  // get products
  useEffect(() => {
    fetch(url).then(response => {
      response.json().then(data => {
        setProducts(data)
        console.log(data)
      })
    })
  }, [])


  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  // add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    }
    console.log(product)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const addedProduct = await response.json()

    // Dynamic reload
    setProducts((prevProducts) => [...prevProducts, addedProduct])
    setName('')
    setPrice('')
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

        {/* <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/> */}

        {/* Global CSS */}
        {/* <h1>React with CSS</h1>
        <p>This is the app paragraph</p> */}

        {/* Component CSS */}
        {/* <StyledComponent/> */}

        {/* Inline CSS */}
        {/* <p style={{
            color: "blue", 
            padding: "25px", 
            borderTop: "2px solid red"
          }}>
            This element has inline CSS
        </p> */}

        {/* Inline dynamic CSS */}
        {/* <h2 style={
            n < 10 ? {color: "purple"} : {color:"pink"}
          }>
            Dynamic CSS
        </h2> */}

        {/* Dynamic class */}
        {/* <h2 className={redTitle ? "red-title" : "title"}>This title will have a dynamic class</h2> */}

        {/* CSS Modules */}
        {/* <Title/>
        <h1 className='my-title'>My title on app.js</h1> */}

        {/* Forms */}
        {/* <MyForm user={{name: "Joseph", email: "joseph@gmail.com", role: "admin", bio: "I'm a lawyer"}}/> */}

        {/* Accessing APIs */}
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-product">
          <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" value={name} name="name" onChange={(e)=> setName(e.target.value)} />
              </label>
              <label>
                Price:
                <input type="number" value={price} name="price" onChange={(e)=> setPrice(e.target.value)} />
              </label>
              <input type="submit" value="Add product"/>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default App;
