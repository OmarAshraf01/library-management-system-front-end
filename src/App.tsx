import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import ManageMembers from "./pages/ManageMembers";
import ManageBooks from "./pages/ManageBooks";
import IssueBooks from "./pages/IssueBooks";
import HandleReturns from "./pages/HandleReturns";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<SharedLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path={"manage-members"} element={<ManageMembers/>}/>
                    <Route path={"manage-books"} element={<ManageBooks/>}/>
                    <Route path={"issue-books"} element={<IssueBooks/>}/>
                    <Route path={"handle-returns"} element={<HandleReturns/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
