import './App.css';
import {NavigationBar} from "./component/NavigationBar";
import { Banner } from './component/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <Banner />
      </div>
  );
}

export default App;
