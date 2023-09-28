import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import ManageMembers from "./pages/ManageMembers";
import ManageBooks from "./pages/ManageBooks";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<SharedLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path={"manage-members"} element={<ManageMembers/>}/>
                    <Route path={"manage-books"} element={<ManageBooks/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
