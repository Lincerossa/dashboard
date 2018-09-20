import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  a{
    font-family: ${props => props.theme.fonts.sansSerif};
    color: white;
    letter-spacing: .04rem;
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: uppercase;
  }
`

export const Button = styled.div`
  background-color: ${props => props.theme.colors.d};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.big ? '2rem' : '1rem'};  
  ${props => props.big ?'min-width: 120px' : ''};
  text-align: center;
  ${props => props.boxShadow ? 'box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 20px' : ''};
  transition: box-shadow .3s ease-in-out;  
  


  i{
    margin-left: .5rem;
  }
  &:hover{
    ${props => props.boxShadow ? 'box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px' : ''};
  }
`