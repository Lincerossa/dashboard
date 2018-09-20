import React, { Component } from 'react';

import { connect } from 'react-redux'
import * as actions from '../../redux/expenses/actions'
import { getExpenses } from '../../redux/expenses/reducer'
import * as S from './styles'
import { Table } from '../../components'
import withLayout from '../../hoc/withLayout'

class Page extends Component {
  getExpense(){
    this.props.asyncSetExpenses()
  }
  componentDidMount() {
    if(!this.expenses) {
      this.getExpense()
    }
  }
  render() {
    const { expenses } = this.props
    return (
      <div>
        {
          (!expenses || !expenses.length)
            ? <S.Loading>Caricamento in corso</S.Loading>
            : <Table 
                data={expenses} 
                defaultPageSize={expenses.length}
                columns = {[{
                  id: 'Data',
                  Header: 'Data',
                  Cell: ({original}) => original.Data,
                  accessor: 'Data'
                }, {
                  id: 'Importo',
                  Header: 'Importo',
                  Cell: ({original}) => Number(original.Importo),
                  accessor: 'Importo',
                }, {
                  id: 'Causale',
                  Header: 'Causale',
                  Cell: ({original}) => original.Causale,
                  accessor: 'Causale'
                }]}
              />
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
