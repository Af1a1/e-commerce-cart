import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Badge, ListGroup} from "react-bootstrap";

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/1')
        .then(res=>res.json())
        .then(cart=>setCart(cart.products))
  }, [])


  return (
    <div className="App">
      <h1 className="p-5">Cart</h1>
      <ListGroup as="ol" numbered className="m-5">
        
        {
          cart.map(product => (
              <ListGroup.Item
                  key={product.productId}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
              >
                  <div className="ms-2 me-auto">
                      <div className="fw-bold">product {product.productId}</div>
                  </div>
                  <Badge bg="primary" pill>
                      quantity: {product.quantity}
                  </Badge>
              </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
}

export default App;
