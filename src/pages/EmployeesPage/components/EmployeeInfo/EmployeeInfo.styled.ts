import styled from 'styled-components'

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

export const InfoBlock = styled.div`
  min-width: 80%;
  min-height: 100px;
  max-width: 95%;
  border: 1px solid #eaeaea;
  padding: 20px 15px;
  border-radius: 10px;

  h5 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    /* font-weight: bold; */
    margin: 10px 0;
  }
`
