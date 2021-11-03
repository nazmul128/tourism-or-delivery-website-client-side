import './App.css';

import Header from './Pages/Shared/Header/Header'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvide';
import Booking from './Pages/Home/Booking/Booking';
import Update from './Pages/Home/Booking/Update';

import SingleBooking from './Pages/Home/SingleBooking/SingleBooking';
import AddTour from './Pages/Home/AddTour/AddTour';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/Home/NotFound/NotFound';



function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/details/:id'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='/booking'>
          <Booking></Booking>
          </Route>
          <Route path='/update/:email'>
          <Update></Update>
          </Route>
          <Route path='/MyBooking'>
         <SingleBooking></SingleBooking>
          </Route>
          <Route path='/add'>
          <AddTour></AddTour>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
