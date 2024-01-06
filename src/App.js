
import './App.css';
import User from './components/user';

function App() {
  return (
    <div className="container my-3">
      <div className = "wrapper">
        <User user={"Admin"}  web={"Website"}/>
        <User user={"Teacher"} web={"MobileApp"}/>
        <User user={"Student"} web={"Desktop"}/>
        <User user={"Staff"} web={"Tab"}/>
    
      </div>
    </div>
  );
}

export default App;
