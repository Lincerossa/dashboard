import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom'

export default ({link, text, icon, big, boxShadow}) => (
  <S.ButtonWrapper>
    <Link to={link}>
      <S.Button big={big} boxShadow={boxShadow}>
        {text} { icon && <i class="material-icons">
          {icon}
        </i>}
      </S.Button>
    </Link>
  </S.ButtonWrapper>
)