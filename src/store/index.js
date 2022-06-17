import React from 'react';
import vaultsStore from './vaultsStore';
import valletStore from './valletStore';

class RootStore {
  constructor() {
    this.vaultsStore = new vaultsStore(this);
    this.valletStore = new valletStore(this);
  }
};

const StoreContext = React.createContext(new RootStore());

export const useStore = () => React.useContext(StoreContext);