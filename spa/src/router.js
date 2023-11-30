import LinkLayout from "./layout/LinkLayout";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import ParamPage from "./pages/ParamPage";

const router = [
  {
    element: <LinkLayout />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <MainPage />,
        path: "main",
      },
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
  {
    element: <ParamPage />,
    path: "/fact/:factId",
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
