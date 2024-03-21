import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/style2.css';
import './assets/css/fontawesome.css';
import Nav from './component/nav';
import Home from './views/home';
import Footer from './component/footer';
// import 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css';
// import 'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js';
// import 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';

function App() {
  return (
    
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
