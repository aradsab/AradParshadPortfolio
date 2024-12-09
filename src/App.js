import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavigationBar} from "./component/NavigationBar";
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <Banner />
        <Skills />
        <Projects />
      </div>
  );
}

export default App;
