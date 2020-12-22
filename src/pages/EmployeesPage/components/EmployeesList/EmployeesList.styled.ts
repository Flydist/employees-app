import styled from 'styled-components'
import { Table } from 'react-bootstrap'

export const StyledTable = styled(Table)`
  margin: 20px 0;
  td {
    cursor: ${(props) => (props.isaddmode === 'true' ? 'pointer' : 'not-allowed')};
  }

  tbody tr:hover {
    background-color: ${(props) => (props.isaddmode === 'true' ? 'rgba(0,0,0,.075)' : 'rgba(200,0,0,.075)')};
  }
`

export const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px auto;
`
