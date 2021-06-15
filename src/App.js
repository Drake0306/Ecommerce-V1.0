import './App.css';
import Container from '@material-ui/core/Container';
import AppBarMain from './AppBar';
import ProductPage from './components/ProductPage';
import Footer from './footer';

function App() {
  return (
    <div>
      <AppBarMain />
      <Container maxWidth="lg">
        <ProductPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
