import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as S from './styles'
import Menu from './Menu'

export default class Layout extends Component {

  constructor(){
    super()
    this.state={
      isOpen: false
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }


  handleToggleMenu(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    const { isOpen } = this.state
    return(
      <S.Layout>
        <S.MenuWrapper isOpen={isOpen}>
            <S.ToggleMenu onClick={this.handleToggleMenu}><i class="material-icons">{isOpen ? 'close': 'menu'}</i></S.ToggleMenu>
          <Menu {...this.props} isOpen={isOpen} onClick={this.handleToggleMenu} />
        </S.MenuWrapper>
        <S.LayoutHeader>
          <Link to="/">
            <i class="material-icons">home</i>
          </Link>
        </S.LayoutHeader>
        <S.Content>
          {this.props.children}
        </S.Content>
      </S.Layout>

    )
  }
}

