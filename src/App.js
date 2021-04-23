import './App.css';
import * as comp from './components/components'
import Navbar from './components/Navbar';
import Button from './components/Button'
import InputField from './components/InputField';
import Radio from './components/Radio'
import Checkbox from './components/Checkbox';
import Typography from './components/Typography';
import Slider from './components/Slider';
import Particles from 'react-particles-js';
import particlesConfig from "./Particles";
import DropSelect from './components/Select';
function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      {/* <div style={{ position: 'absolute' }}>
        <Particles height="100%" width="100vw" params={particlesConfig} />
      </div> */}
      <h1>Components</h1>
      <Navbar />
      <Button />
      <InputField />
      <Radio />
      <Checkbox />
      <DropSelect />
      <Typography />
      <Slider />
    </div>
  );
}



export default App;
