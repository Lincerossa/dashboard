import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom'



export default props => {
  const area = props.match && props.match.params && props.match.params.area
  const { isOpen } = props
  return(
    <S.Menu>
      <S.MenuLinksGroup>
        <S.MenuLinkTitle isActive={area === '/data'}>data</S.MenuLinkTitle>
          { 
          isOpen && 
          <React.Fragment>
            <S.MenuLinks>
              <S.MenuLink isActive={area === '/data'}>
                <Link to="/data">
                  visualizza
                </Link>
              </S.MenuLink>
              <S.MenuLink isActive={area === '/ddd'}>
                <Link to="/data">
                    altro
                </Link>
              </S.MenuLink>
            </S.MenuLinks>
          </React.Fragment>
        }
      </S.MenuLinksGroup>
      <S.MenuLinksGroup>
        <S.MenuLinkTitle
          isActive={area === '/graphs' || area == 'segments'}
        >grafici</S.MenuLinkTitle>
        { 
          isOpen && 
          <React.Fragment>
            <S.MenuLinks>
              <S.MenuLink isActive={area === '/graphs'}>
                <Link to="/graphs">
                  graphs
                </Link>
              </S.MenuLink>
              <S.MenuLink isActive={area === '/segments'}> 
                <Link to="/segments">
                segments
                </Link>
              </S.MenuLink>
            </S.MenuLinks>
          </React.Fragment>
        }
      </S.MenuLinksGroup>
    </S.Menu>
  )
}