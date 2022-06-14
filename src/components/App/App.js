import { observer } from "mobx-react-lite";
import { useEffect } from 'react';

const App = observer(({vaultsStore}) => {
  const {vaults, error} = vaultsStore;

  useEffect(() => {
    vaultsStore.fetchVaults();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(error) return <div>{error}</div>
  
  return (
    <div className="App">
      {vaults.length > 0 && vaults.map((vault) => <div key={vault.addr}>
        <p>{vault.addr}</p>
        <p>{vault.name}</p>
        <p>{vault.platform}</p>
      </div>)}  
    </div>
  );
});

export default App;
