import { Divider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Details from './pages/Details';
import Portfolio from './pages/Portfolio';
import NoMatch from './pages/NoMatch';
import Theme from './Theme'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const renderWithTemplate = (page: any) => (<ThemeProvider theme={Theme}>
  <div className="App">
    <NavigationBar />
    {page}
    <Divider />
    <Footer />
  </div>
</ThemeProvider>
)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={renderWithTemplate(<LandingPage />)}>
        </Route>
        <Route path="about-us" element={renderWithTemplate(<AboutUs />)}>
        </Route>
        <Route path="portfolio" element={renderWithTemplate(<Portfolio />)}>
        </Route>
        <Route path="/portfolio/:id" element={renderWithTemplate(<Details />)} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
