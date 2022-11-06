import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Addtodo from './Component/Addtodo';
import Todo from './Component/Todo'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Header />
      <div className="section text-light">
        <Container>
          <Addtodo />
          <Todo />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
