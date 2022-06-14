import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import formatNumber from '../../utils/formatNumber';

const App = observer(({vaultsStore}) => {
  const {vaults, error} = vaultsStore;

  useEffect(() => {
    vaultsStore.fetchVaults();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(error) return <div>{error}</div>
  
  return <Layout className="layout">
    <Layout.Content style={{ padding: '26px' }}>
      {vaults.length > 0 && vaults.map((vault) => <Card key={vault.addr}>
        <Row>
          <Col span={12}>Name : {vault.name}</Col>
          <Col span={12}>tvl: ${formatNumber(vault.tvlUsdc)}</Col>
        </Row>
      </Card>)}
    </Layout.Content>
  </Layout>
});

export default App;
