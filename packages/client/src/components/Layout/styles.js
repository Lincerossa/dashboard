import styled from 'styled-components'

const menuWidth = '100px'
const menuHeaderHeight = '3rem'

export const Layout = styled.div`
  padding-left: ${menuWidth};
  padding-top: ${menuHeaderHeight};
`
export const LayoutHeader = styled.div`
  background-color: ${props => props.theme.colors.c};
  position: fixed;
  top: 0;
  left: ${menuWidth};
  height: ${menuHeaderHeight};
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding-left: .5rem;
  i{
    color: white;
    font-size: 2rem;
  }
`

export const MenuWrapper = styled.div`
  position: fixed;
  
  z-index: 2;
  top:0;
  left: 0;
  bottom: 0;
  transition: width .2s ease-in-out;
  width: ${props => props.isOpen ? '200px' : menuWidth};
`

export const MenuLinkTitle = styled.div`
  text-transform: uppercase;
  color: ${props => props.isActive ? props.theme.colors.aa : ''};
  font-family: ${props => props.theme.fonts.sansSerif};
`

export const MenuLink = styled.div`
  margin-bottom: .5rem;

  a{
    text-decoration: none;
    color: inherit;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: .75rem;
  }

  ${
    props => props.isActive 

    ? 
      `
      a{
        color: ${props.theme.colors.a} !important;
      }
      `
    : 
      `
      `
  }


  &:last-child{
    margin-bottom: 0;
  }
  &:hover{
    a{
      color: ${props => props.theme.colors.a};
    }
  }

`

export const Menu = styled.div`
  height: 100%;
  background: white;
  padding: 1rem;
  box-shadow: 6px 0px 4px 0px rgba(0,0,0,0.06);
`

export const MenuLinks = styled.div`
  margin-top: .5rem;
`

export const MenuLinksGroup = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 1rem;
  i{
    font-size: .75rem;
  }
`


export const Content = styled.div`
`

export const ButtonWrapper = styled.div`
`

export const ToggleMenu = styled.div`
  height: ${menuHeaderHeight};
  background: ${props => props.theme.colors.a};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`