import { runInAction, makeAutoObservable } from 'mobx';
import { loadContract } from '../utils/loadContract'

export default class contractStore {
  contract = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.getContract();
  };

  getContract = async () => {
    const name = 'SmartVault';
    try {
      const contract = await loadContract(name);
      console.log(contract)
      runInAction(() => {
        this.contract = contract;
      });
    } catch (e) {
      runInAction(() => {
        this.error = `getContract error: ${e.message}`;
      })
    }
  };
}