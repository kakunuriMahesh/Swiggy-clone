import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import useOnline from "./utils/useOnline";
import "./index.css";
import RestaurantMenu from "./src/component/RestaurantMenu";

// Lazy-loaded components
const About = React.lazy(() => import('./src/component/About'));
const Error = React.lazy(() => import('./src/component/Error'));
const Contact = React.lazy(() => import('./src/component/Contact'));
const Cart = React.lazy(() => import('./src/component/Cart'));
const Body = React.lazy(() => import('./src/component/Body'));
const Heading = React.lazy(() => import('./src/component/Heading'));

const App = () => {
    const isOnline = useOnline();
    return (
        <div>
            {
                isOnline ?
                    <div>
                        <Heading />
                        <Outlet />
                    </div> :
                    <Error />
            }
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<h1>loading...</h1>}><Body /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>loading...</h1>}><Contact /></Suspense>
            },
            {
                path: "/cart",
                element: <Suspense fallback={<h1>loading...</h1>}><Cart /></Suspense>
            },
            {
                path: '/restaurantmenu/:id',
                element: <Suspense fallback={<h1>loading...</h1>}><RestaurantMenu /></Suspense>
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
