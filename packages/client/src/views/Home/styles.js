import styled from 'styled-components'

export const Page = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colors.c};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PageInner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`


export const ButtonWrapper = styled.div`
  margin: 1rem;
  color: blue;
`