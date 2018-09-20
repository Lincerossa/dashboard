import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import * as S from './styles'

class Page extends Component {

  render() {
    return(
      <S.Page>
        <S.PageInner>
          <S.ButtonWrapper>
            <Button
              link="/data"
              text="dati"
              icon="reorder"
              big
              boxShadow
            />
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <Button
              link="/graphs"
              text="grafici"
              icon="equalizer"
              big
              boxShadow
            />
          </S.ButtonWrapper>
        </S.PageInner>       
      </S.Page>
    )
  }
}

export default Page
