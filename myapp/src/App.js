import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import { Switch, Route } from 'react-router-dom';
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";
import { ToastContainer } from 'react-toastify';
import Shops from "./Pages/Shops";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
 
  return (


    <div className="App">
      <Navbar />
      <ToastContainer />


      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:id' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/shops' component={Shops} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />


      </Switch>
      <Footer/>
    </div>


  );
}

export default App;
