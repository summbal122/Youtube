import { Provider } from "react-redux";
import store from "./src/utils/appStore";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import WatchPage from "./src/components/WatchPage";
import MainSection from "./src/components/MainSection";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
