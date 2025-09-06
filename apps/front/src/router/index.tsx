import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../view/pages/Login";
import { AuthGuard } from "./AuthGuard";
import { AuthLayout } from "../view/layouts/AuthLayout";
import { MainLayout } from "../view/layouts/MainLayout";
import { Dashboard } from "../view/pages/Dashboard";
import { Income } from "../view/pages/Income";
import { Expense } from "../view/pages/Expense";
import { Category } from "../view/pages/Category";
import { Budget } from '../view/pages/Budget';

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthGuard isPrivate={false}/>}>
                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login/>}/> 
                    </Route>
                </Route>
                <Route element={<AuthGuard isPrivate={false}/>}>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<Dashboard/>}/> 
                        <Route path="/cadastrar-receita" element={<Income/>}/>
                        <Route path="/cadastrar-despesa" element={<Expense/>}/>
                        <Route path="/categorias" element={<Category/>}/>
                        <Route path="/orcamento" element={<Budget/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}