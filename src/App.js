import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostList from './komponent/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://suliada.files.wordpress.com/2020/08/logo-pdi-vector-logo-pdi-png-logo-pdi-cdr-logo-pdi-corel-logo-pdi-ai-logo-pdi-pdf.png?w=627" className="App-logo" alt="logo" />
        <PostList/>
      </header>
    </div>
  );
}

export default App;
