import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Redirect from "../features/auth/components/Redirect";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Container from "../layouts/Container";
import HomePage from "../pages/Homepage";

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
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
