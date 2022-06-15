import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import { Layout, Card, Col, Row } from 'antd';
import { useStore } from "../../../store";
import formatNumber from '../../../utils/formatNumber';

const ListPage = observer(() => {
  const { vaultsStore: {error, vaults, fetchVaults} } = useStore();

  useEffect(() => {
    fetchVaults();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return error ? <p>{error}</p> :
    <Layout className="layout">
      <Layout.Content style={{ padding: '26px' }}>
        {vaults.length > 0 && vaults.map((vault) => <Card key={vault.addr}>
          <Row>
            <Col span={8}>Name : {vault.name}</Col>
            <Col span={8}>tvl: ${formatNumber(vault.tvlUsdc)}</Col>
            <Col span={8}>addr: {vault.addr}</Col>
          </Row>
        </Card>)}
      </Layout.Content>
    </Layout>
});

export default ListPage;
