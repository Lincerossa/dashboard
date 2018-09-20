import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom'
import Button from '../Button'



export default props => {
  const area = props.match && props.match.params && props.match.params.area
  return(
    <S.Menu>
      <S.Group>
        <Link to="/">
          <S.IconWrapper isActive={area === '/'}>
            <i class="material-icons">home</i>
          </S.IconWrapper>
        </Link>
      </S.Group>
      <S.Group>
        <Link to="/data">
          <S.IconWrapper isActive={area === '/data'}>
            <i class="material-icons">reorder</i>
          </S.IconWrapper>  
        </Link>
        <Link to="/graphs">
          <S.IconWrapper isActive={area === '/graphs'}>
            <i class="material-icons">equalizer</i>
          </S.IconWrapper>
        </Link>
      </S.Group>
    </S.Menu>
  )
}