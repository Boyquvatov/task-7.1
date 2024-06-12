// router.js
import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { Login, Todos, Products, Main, SingleProduct } from "@pages";

const Index = () => {
    const routes = createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="main/*" element={<Main />}>
                <Route index element={<Todos />} />
                <Route path="todos" element={<Todos />} />
                {/* <Route path="products" element={<Products />} />
                <Route path="singleproduct/:id" element={<SingleProduct />} /> */}
            </Route>
        </Route>
    );

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default Index;
