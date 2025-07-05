import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import store from "./src/utils/appStore";
const App = () => {
  return (
    <div>
      <Provider store= {store}>
       <Header/>
       <Body/>
     </Provider>
    </div>
  )
}

export default App
