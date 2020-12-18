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

export const FormContainer = styled.form`
    display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  width: 100%;
  min-width: 310px;
  max-width: 430px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 20px 25px;
  color: #2c2738;
  font-size: 16px;
`

export const StyledForm = styled(Form)`
  margin: 20px 0;
  min-width: 80%;
  max-width: 95%;
  border: 1px solid #eaeaea;
  padding: 20px 15px;
  border-radius: 10px;
`
