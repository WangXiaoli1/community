import './App.css';
import Boss from './Boss';
import Property from './Property';
import Owner from './Owner';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Boss></Boss>
          <Property></Property>
          <Owner></Owner>
      </div>
          </Router>
    );
  }
}

export default App;
