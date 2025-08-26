import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../view/pages/Login";
import { AuthGuard } from "./AuthGuard";
import { AuthLayout } from "../view/layouts/AuthLayout";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate={false}/>}>
                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login/>}/> 
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}