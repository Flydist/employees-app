import styled from 'styled-components'
import { Table } from 'react-bootstrap'

export const StyledTable = styled(Table)`
  margin: 20px 0;
  cursor: ${(props) => (props.isaddmode === 'true' ? 'pointer' : 'not-allowed')};
`
