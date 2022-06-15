import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import vaultsStore from './store/vaultsStore';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App vaultsStore={vaultsStore}/>
  </React.StrictMode>
);
