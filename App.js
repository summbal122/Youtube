import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import store from "./src/utils/appStore";
import { createBrowserRouter } from "react-router";
import Body from "./src/components/Body";
import { RouterProvider } from "react-router";
import WatchPage from "./src/components/WatchPage";
import MainSection from "./src/components/MainSection";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    { path: "/",
      element: <MainSection/>
    },
    { path: "/watch?",
      element:<WatchPage/>
    }
  ]
}, 

])
const App = () => {
  return (
    <div>
      <Provider store= {store}>
       <Header/>
       <RouterProvider router={appRouter}/>
     </Provider>
    </div>
  )
}

export default App
