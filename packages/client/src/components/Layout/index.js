import React from 'react';
import * as S from './styles'
import Menu from './Menu'
import { Link } from 'react-router-dom'
export default (props) => {
  return (
    <S.Layout>
      <S.Header>
        <Menu {...props} />
      </S.Header>

      <S.Content>
        {props.children}
      </S.Content>
    </S.Layout>
  )
}
