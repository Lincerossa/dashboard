import React from 'react';
import * as S from './styles'
import { Link } from 'react-router-dom'

export default props => (
  <S.Menu>
    <S.MenuCol>
      <Link to="/about">about</Link>
    </S.MenuCol>
    <S.MenuCol>
      <Link to="/altros">altros</Link>
    </S.MenuCol>
    <S.MenuCol>
      <Link to="/asd">asd</Link>
    </S.MenuCol>
    <S.MenuCol>
      <Link to="/asasasd">asasasd</Link>
    </S.MenuCol>
  </S.Menu>
)