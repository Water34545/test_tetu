import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";
import formatNumber from '../../../utils/formatNumber';

const VaultsPrev = ({vault}) => {
  const {addr, name, tvlUsdc} = vault;

  return <Link to={`vault/${addr}`}>
    <Card>
      <Row>
        <Col span={8}>Name : {name}</Col>
        <Col span={8}>tvl: ${formatNumber(tvlUsdc)}</Col>
        <Col span={8}>addr: {addr}</Col>
      </Row>
    </Card>
  </Link>
};

export default VaultsPrev;