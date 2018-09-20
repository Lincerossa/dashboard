import styled from 'styled-components'

const layoutHeaderHeight = '50px'

export const Layout = styled.div`
  padding-top: ${layoutHeaderHeight};
  min-height: ${`calc(100vh - ${layoutHeaderHeight})`};
`


export const Header = styled.div`
  position: fixed;
  z-index: 1;
  top:0;
  left: 0;
  right: 0;
  height: ${layoutHeaderHeight};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  i{
    color: ${props => props.theme.colors.d};
    font-size: 2rem;
  }

`

export const Menu = styled.div`
  display: flex;
  display: flex;
    justify-content: space-between;
    flex-grow: 1;
`

export const Group = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  position: relative;
  &:before{

    ${props => props.isActive ? `
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      background-color: ${props.theme.colors.a};
      height: 2px;
    ` : ''};
  }
`
export const Content = styled.div`
`

export const ButtonWrapper = styled.div`

`




