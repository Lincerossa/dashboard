import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../redux/expenses/actions'
import { getExpenses } from '../../redux/expenses/reducer'
import * as S from './styles'
import { LineSeries } from '../../components'
import withLayout from '../../hoc/withLayout'






class Page extends Component {
  constructor() {
    super()
    this.state={
      loading: false,
    }
    this.handleLoadData = this.handleLoadData.bind(this)
  }
  getExpense(){
    this.props.asyncSetExpenses()
  }

  async handleLoadData(){
    this.getExpense()
  }

  async componentDidMount() {
    this.setState({loading: true})
    if(!this.props.expenses || !this.props.expenses.length) {
      await this.handleLoadData()
    }
    this.setState({loading: false})
  }
  render() {
    const { expenses } = this.props
    const { loading } = this.state

    console.log("dateprima", expenses)
    const data = expenses && 
      expenses
      .filter(expense => {
        const isDate = typeof new Date(expense.data).getTime() === 'number'
        return isDate      
      })
      .map(expense => {
        const date = new Date(expense.data).getTime()
        return {
          x: Number(date),
          x0: Number(date - 300000000),
          y: expense.importo || 0,
        }
      })
      .sort((a,b)=> a.x > b.x ? 1 : -1)

    return (
      <div>

        {
          (loading)
            ? <S.Loading>Caricamento in corso</S.Loading>
            : <LineSeries data={data} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: getExpenses(state)
})

export default connect(
  mapStateToProps,
  actions,
)(withLayout(Page))