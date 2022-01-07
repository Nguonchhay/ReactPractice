import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { LanguageProvider } from '../context/LanguageContext';
import CustomNavbar from './themes/Navbar';
import Content from './Content';

function App() {
  return (
    <>
      <LanguageProvider>
        <CustomNavbar/>
        <Content/>
      </LanguageProvider>
    </>
  );
}

export default App;
