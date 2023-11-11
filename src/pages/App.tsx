import React from 'react';
import './app.module.scss';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import Layout from "../components/Layout";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import Contact from "./Contact";
import NotFound from "./Notfound";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<List/>}/>
        <Route path="add" element={<Add/>}/>
        <Route path="contacts" element={<Outlet/>}>
            <Route path=":id" element={<Outlet/>}>
                <Route index element={<Contact/>}/>
                <Route path="edit" element={<Edit/>}/>
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Route>
));

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
