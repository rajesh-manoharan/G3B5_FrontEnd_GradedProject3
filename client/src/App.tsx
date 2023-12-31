import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <div>
      <Container className="my-5">
        <Menu />
      </Container>
    </div>
  )
}

export default App;
