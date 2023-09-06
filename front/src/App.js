import React from 'react';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import UserList from './components/Users';
import  {BrowserRouter ,Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Switch>
     <Route  path="/"  exact={true} component={Dashboard}  />
     <Route  path="/products"  exact={true} component={Products}  />
     <Route  path="/userList"  exact={true} component={UserList}  />
     </Switch>
    </div>
    
    </BrowserRouter>
  );
}

export default App;