import React from 'react';
import './app.module.scss';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "../components/Layout";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import NotFound from "./NotFound";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<List/>}/>
        <Route path="add" element={<Add/>}/>
        <Route path="edit/:id" element={<Edit/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
));

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
