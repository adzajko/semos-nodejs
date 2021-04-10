import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/_index.scss';
import { SideNav } from './components/side-nav/SideNav';
import { Routes } from './components/routes/Routes';

function App() {
  return (
    <Router>
      <section className='layout-container'>
        <header className='layout-container__header'>
          <Header />
        </header>
        <main className='layout-container__main'>
          <Routes />
          <SideNav />
        </main>
        <footer className='layout-container__footer'>
          <Footer />
        </footer>
      </section>
    </Router>
  );
}

export default App;
