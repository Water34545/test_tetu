import React from 'react';
import vaultsStore from './vaultsStore';
import valletStore from './valletStore';
import contractStore from './contractStore'

class RootStore {
  constructor() {
    this.vaultsStore = new vaultsStore(this);
    this.valletStore = new valletStore(this);
    this.contractStore = new contractStore(this);
  }
};

const StoreContext = React.createContext(new RootStore());

export const useStore = () => React.useContext(StoreContext);