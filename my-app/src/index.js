import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes.js";
// import NavbarComp from './components/NavbarComp.js';
import Header from "./Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ShowPinjam from "./components/Pinjam/ShowPinjam";
import ListPinjam from './components/Pinjam/ListPinjam.js';
import Home from './components/Home.js';
import Login from './Login.js';
import Register from './Register.js';
import About from './components/About.js';
import "./index.css"
import BookPage from './components/BookPage.js';
import ListBuku from './components/Bukubuku/ListBuku.js';
import ListPengembalian from './components/ListPengembalian.js';
import Pengembalian from './components/Pengembalian.js';
import EditPengembalian from './components/EditPengembalian.js';
import DetailPengembalian from './components/DetailPengembalian.js';
import editBuku from './components/Bukubuku/editBuku.js';
import editPinjam from './components/Pinjam/editPinjam.js';
import showBuku from './components/Bukubuku/showBuku.js';
import { Container } from 'react-bootstrap';
import CreatePinjam from './components/Pinjam/CreatePinjam.js';
import CreateBuku from './components/Bukubuku/CreateBuku.js';
import pageHome from './components/mainPage/pageHome.js';

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
      <div className="App">
        <Router>
          
          <Header />
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
                />
            ))}
          </Switch>
        </Router>
      </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


ReactDOM.render(
  
  <Router>
    <Header />
    {/* <App /> */}
      <div>
        <Container>
          <br />

          {/* authroutes */}
        <Route exact path='/' component={Home} />
        <Route path='/homepg' component={pageHome} />
        
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        
        {/* landing page routes */}
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        {/* buku routes */}
        <Route path='/book' component={BookPage} />
        <Route path='/listBuku' component={ListBuku} />
        <Route path='/tambahBuku' component={CreateBuku} />
        <Route path='/showBuku/:id' component={showBuku} />
        <Route path='/editBuku/:id' component={editBuku} />
        {/* pengembalian routes */}
        <Route path='/listpengembalian' component={ListPengembalian} />
        {/* peminjaman routes */}
        <Route path='/listpinjam' component={ListPinjam} />
        <Route path='/showpinjam/:id' component={ShowPinjam} />
        <Route path='/editpinjam/:id' component={editPinjam} />
        <Route path='/createpinjam' component={CreatePinjam} />
        <Route path='/pengembalian' component={Pengembalian} />
        <Route path='/editpengembalian/:id' component={EditPengembalian} />
        <Route path='/detailpengembalian/:id' component={DetailPengembalian} />

        {/* coba routes */}

        </Container>
      </div>
  </Router>,
  document.getElementById('root')
);
// serviceWorker.unregister();