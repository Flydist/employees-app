import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  width: 90%;

  p {
    margin: 0;
  }
`

export const StyledForm = styled(Form)`
  margin: 20px 0;
  min-width: 80%;
  max-width: 95%;
  border: 1px solid #eaeaea;
  padding: 20px 15px;
  border-radius: 10px;
`
