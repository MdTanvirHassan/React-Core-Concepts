import React,{UseState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const products=[
    {name:'Photoshop', price:'$99.99', details:'lorem3' },
    {name:'PhotoIllastrator', price:'$89.99', details:'lorem3' },
];

const friends=[ 
  {name:'Alex', phone:'014', details:'lorem3' },
{name:'Sara', phone:'014', details:'lorem3' },
{name:'John', phone:'014', details:'lorem3' }, 
];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Name, email, phone List:</p>
          <Count></Count>
          
          <Users></Users>
          {products.map(product=> <Products product={product}></Products>)}
          {friends.map(fr=> <Friend friend={fr}></Friend>)}
          <Products product={products[0]}></Products>

          
          
          <Person name='Tanvir' email="Tanvir@gmail.com" phone='0123456789'></Person>
          <Person name='Hassan' email="hassan@gmail.com" phone='0123456789'></Person>
          <Person name='Alex' email="Alex@gmail.com" phone='0123456789'></Person>
          
          <Person></Person>
        </div>
        
        
      </header>
    </div>
  );
}

function Count(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <h4>Count:{count}</h4>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <Chart chart={count+3}></Chart>
    </div>
  )
}

function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));

  },[]);
  const style={
   
    textAline:"left"
  };

  return(
    <div>
      <h3>Dynamic Users: {users.length}-</h3>
      <ul style={style}>
        {
          users.map(user=><li>{user.id} - {user.name} - {user.username}</li>)
        }
        
      </ul>
    </div>
  )
}

function Friend(props){
  const style={
    backgroundColor:'gray',
    color:'white',
    padding: '10px',
    width:"200px",
    height:'150px',
    margin: '10px',
    border: '2px solid lightBlue',
    borderRadius: '20px',
  };
  const {name,phone,details}=props.friend;
  console.log(name,phone,details);
  return(
    
    <div style={style}>
      <h6> {name}</h6>
      <p>{phone} </p>
      
    </div>
  );

}

function Chart(props) {
  return(
    <div>
      <h3>Chart:{props.chart}</h3>
    </div>
  )
  
}
function Products(props){
  const style={
    backgroundColor:'gray',
    color:'white',
    padding: '10px',
    width:"200px",
    height:'200px',
    margin: '10px',
    border: '2px solid lightBlue',
    borderRadius: '20px',
  };
  const {name,price,details}=props.product;
  console.log(name,price,details);
  return(
    
    <div style={style}>
      <h6> {name}</h6>
      <h3>{price} </h3>
      <button >Buy Now</button>
     
      
    </div>
  );

}

function Person(props){
  const style={
    backgroundColor:'gray',
    color:'white',
    padding: '10px',
    width:"400px",
    height:'200px',
    margin: '10px',
    border: '1px solid lightBlue',
    borderRadius: '20px'
  };
  return(
    
    <div style={style}>
      <h4>Name: {props.name}</h4>
      <h5>Email: {props.email} </h5>
      <h6>Phone: {props.phone}</h6>
      
    </div>
  );

}

export default App;
