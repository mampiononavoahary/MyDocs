import './App.css';
import './body.css';
import './bigBody.css'
import Docs from './components/docs';
import Body from './components/body'
import BigBodys from './components/bigBody';

function App() {
  return (    
    <div className="HeadBody">
           <Docs/> 
           <Body/>    
           <BigBodys/>
    </div>
  );
}

export default App;
