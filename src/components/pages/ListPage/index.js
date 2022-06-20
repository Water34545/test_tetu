import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import { Layout } from 'antd';
import { useStore } from "../../../store";
import VaultsPrev from "../../common/VaultPrev";

const ListPage = observer(() => {
  const { vaultsStore: {error, vaults, fetchVaults} } = useStore();

  useEffect(() => {
    if(vaults.length < 1) fetchVaults();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return error ? <p>{error}</p> :
    <Layout className="layout">
      <Layout.Content style={{ padding: '26px' }}>
        {vaults.length > 0 && vaults.filter(vault=> vault.active).map(vault => <VaultsPrev key={vault.addr} vault={vault}/>)}
      </Layout.Content>
    </Layout>
});

export default ListPage;
