import React from 'react';
import './App.css';
import Logintbygoogle from './containers/Logintbygoogle'
import Dashboard from "./containers/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
//import Logger from './logger';


function App() {
    return (
      <>
    <MuiThemeProvider>
     <div className="App">
       <Router>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Logintbygoogle} ></Route>
            {/* <Route path='/Dashboard' component={Dashboard} ></Route> */}
            <Route path='/NavBar' component={NavBar} ></Route>
            <Route path='/Search' component={Search} ></Route>
          </Switch>
        </div>
      </Router>
      </div>
      </MuiThemeProvider>
     </>
    );
  }
  export default App;

// import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import NavBar from './components/navbar/NavBar';
// import Search from './components/search/Search';

// import './App.css';

// class App extends Component{

//   render() {
//     return (
//       <MuiThemeProvider>
//         <div>
//             <NavBar />
//             <Search />
//         </div>
//       </MuiThemeProvider>
//     );
//   }

// }

// export default App;