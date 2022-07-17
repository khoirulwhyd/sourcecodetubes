import React from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./components/Home";
import About from "./components/About";
import BookPage from "./components/BookPage";
import Book from "./components/Book";
import Peminjaman from "./components/Peminjaman";
import Pengembalian from "./components/Pengembalian";
import Homepage from "./components/Homepage";
import CrudHome from "./components/CrudHome";
import ListBuku from "./components/Bukubuku/ListBuku";
import ListPengembalian from "./components/ListPengembalian";
import CreateBuku from "./components/Bukubuku/CreateBuku";

import ListPinjam from "./components/Pinjam/ListPinjam";
import ShowPinjam from "./components/Pinjam/ShowPinjam";

// import ReactDOM from 'react-dom';
// import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
const routes = [
    { name: "Register", path: "/register", exact: true, main: () => <Register /> },
    { name: "Login", path: "/login", exact: true, main: () => <Login /> },
    { name: "Login", path: "/", exact: true, main: () => <Login /> },
    { name: "Home", path: "/home", exact: true, main: () => <Home /> },
    { name: "About", path: "/about", exact: true, main: () => <About /> },
    { name: "Buku", path: "/book", exact: true, main: () => <BookPage /> },
    { name: "", path: "/inputBuku", exact: true, main: () => <Book /> },
    { name: "", path: "/peminjaman", exact: true, main: () => <Peminjaman /> },
    { name: "", path: "/pengembalian", exact: true, main: () => <Pengembalian /> },
    { name: "", path: "/homepage", exact: true, main: () => <Homepage /> },
    { name: "", path: "/list", exact: true, main: () => <ListBuku /> },
    { name: "", path: "/listpengembalian", exact: true, main: () => <ListPengembalian /> },
    { name: "", path: "/createBuku", exact: true, main: () => <CreateBuku /> },
    { name: "", path: "/daftarBuku", exact: true, main: () => <CrudHome /> },
    { name: "", path: '/showpinjam/:id', exact: true, main: () => <ShowPinjam /> },
    //routing peminjaman
    { name: "", path: "/listpinjam", exact: true, main: () => <ListPinjam /> }
];


export default routes;