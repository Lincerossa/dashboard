import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../redux/expenses/actions'
import { getExpenses, getExpensesStatus } from '../../redux/expenses/reducer'
import * as S from './styles'
import { LineSeries } from '../../components'
import withLayout from '../../hoc/withLayout'

class Page extends Component {
  constructor() {
    super()
    this.handleLoadData = this.handleLoadData.bind(this)
  }

  componentDidMount() {
    this.handleLoadData()
  }

  handleLoadData(){
    const { asyncSetExpenses } = this.props
    asyncSetExpenses()
  }

  render() {
    const { expenses, status } = this.props

    const data = expenses && 
      expenses.length > 0 &&
      status !== 'LOADING' &&
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
          (status === 'LOADING')
            ? <S.Loading>Caricamento in corso</S.Loading>
            : <LineSeries data={data} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: getExpenses(state),
  status: getExpensesStatus()
})

export default connect(
  mapStateToProps,
  actions,
)(withLayout(Page))