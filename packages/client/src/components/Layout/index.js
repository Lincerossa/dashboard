import React from 'react';
import * as S from './styles'
import Menu from './Menu'
export default (props) => {
  return (
    <S.Layout>
      <S.Header>
        <Menu {...props} />
      </S.Header>
      {props.children}
    </S.Layout>
  )
}
