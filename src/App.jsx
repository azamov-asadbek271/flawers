
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RootLayouts from "./layouts/RootLayouts";

function App() {
const admin = useAppStore((state) =>state.admin);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes admin={admin}>
        <RootLayouts/>
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home/>
        }
      ]
    },
    {
      path: "/login",
      element: admin ? <Navigate to="/"/> : <Login/>,
    },
  ]);
  return <RouterProvider router={routes}/>
}

export default App