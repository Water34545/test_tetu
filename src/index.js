import React from 'react';
import ReactDOM from 'react-dom/client';
import { configure } from "mobx";
import vaultsStore from './store/vaultsStore';
import App from './components/App/App';

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App vaultsStore={vaultsStore}/>
  </React.StrictMode>
);
