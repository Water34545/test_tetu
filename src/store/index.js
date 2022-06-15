import React from "react";
import vaultsStore from "./vaultsStore";

class RootStore {
  constructor() {
    this.vaultsStore = new vaultsStore(this);
  }
};

const StoreContext = React.createContext(new RootStore());

export const useStore = () => React.useContext(StoreContext);