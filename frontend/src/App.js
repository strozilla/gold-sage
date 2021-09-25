import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Review from './components/Review'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import products from './products'




const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
                 
          <Route path='/product/:id'>
            <ProductScreen product={products}/>
          </Route>
        </Container> 
      </main>
      <Review />  
      <Footer />
    </Router>
  );
}

export default App;
