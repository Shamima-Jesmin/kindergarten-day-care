import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Booking from './Components/Admission/Admission';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admission from './Components/Admission/Admission';
import Admin from './Components/Admin/Admin';
import AddClass from './Components/Admin/AddClass/AddClass';
import OrderList from './Components/Admin/OrderList/OrderList';
import ManageServices from './Components/Admin/ManageServices/ManageServices';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AdmissionInfo from './Components/Admission/AdmissionInfo/AdmissionInfo';
import AdmissionList from './Components/Admission/AdmissionList/AdmissionList';
import Review from './Components/Admission/Review/Review';
import Payment from './Components/Admission/Payment/Payment';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <div>
      <Switch>
      <Route  path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>
       <PrivateRoute path='/admission/:id'>
        <Admission></Admission>
       </PrivateRoute>
       <Route path="/admissionInfo">
          <AdmissionInfo></AdmissionInfo>
        </Route>
        <Route path="/admissionList">
          <AdmissionList></AdmissionList>
        </Route>
        <Route path="/payment">
          <Payment></Payment>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
       <Route path="/addClass">
          <AddClass></AddClass>
        </Route>
        <Route path="/orderList">
          <OrderList></OrderList>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
