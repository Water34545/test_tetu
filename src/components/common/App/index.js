import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header'
import ListPage from '../../pages/ListPage';
import VaultPage from '../../pages/VaultPage';

const App = () => {
  return <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<ListPage/>}/>
          <Route path="vault/:addr" element={<VaultPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
};

export default App;
