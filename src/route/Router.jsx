import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Redirect from "../features/auth/components/Redirect";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Container from "../layouts/Container";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Redirect>
        <LoginPage />
      </Redirect>
    ),
  },
  {
    path: "/register",
    element: (
      <Redirect>
        <RegisterPage />
      </Redirect>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
