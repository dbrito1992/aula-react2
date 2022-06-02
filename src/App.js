import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Run from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Run />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
