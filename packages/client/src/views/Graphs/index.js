import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import * as actions from '../../redux/expenses/actions'
import { getExpenses, getExpensesStatus } from '../../redux/expenses/reducer'
import * as S from './styles'
import { LineSeries } from '../../components'
import withLayout from '../../hoc/withLayout'

class Page extends Component {
  constructor() {
    super()
    this.state ={
      segments: null
    }
    this.handleLoadData = this.handleLoadData.bind(this)
    this.handleGetSegments = this.handleGetSegments.bind(this)
  }

  componentDidMount() {
    this.handleLoadData()
    this.handleGetSegments()
  }

  async handleGetSegments(){
    const segments = await axios.get("http://localhost:3005/get/segments").then(x => x.data)
    this.setState({
      segments
    })
  }

  handleLoadData(){
    const { asyncSetExpenses } = this.props
    asyncSetExpenses()
  }

  render() {
    const { expenses, status } = this.props
    const { segments } = this.state

    const myData = expenses && 
      expenses.length > 0 &&
      status !== 'LOADING' &&
      expenses
      .filter(expense => {
        const isDate = typeof new Date(expense.data).getTime() === 'number'
        return isDate      
      })

    const data = myData &&
      myData.length > 0 &&
      myData.map(expense => {
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
            : 
            <React.Fragment>
              <LineSeries data={data} />

              <S.SegmentsWrapper>
                <S.SegmentWrapperHeader>Visualizza di seguito le categorie di spesa</S.SegmentWrapperHeader>
              {
                segments &&
                segments.length > 0 &&
                segments.map(({ text, tags, budget}) => {

                  const arr = tags.split(",")
                  
                  const filteredData = myData
                    .filter(({causale}) => {
                      for (let i = 0; i < arr.length; i++) {
                        if(causale.toLocaleLowerCase().indexOf(arr[i].toLocaleLowerCase()) > -1) return true
                      }
                    })

                  const total = Math.abs(filteredData
                    .reduce((sum, val) => sum +=val.importo, 0))

                  return(
                    <S.Segment>
                    <S.SegmentHeader>
                        <S.SegmentText>{text}</S.SegmentText>
                        <S.SegmentBudget>budget: {budget}€</S.SegmentBudget>
                        {
                          arr.map(tag => <S.SegmentTag>{tag}</S.SegmentTag>)
                        }
                        <S.SegmentResult color={130 - (total/budget)*130}>
                          <div>{Number(total).toFixed(2)} €</div>
                        </S.SegmentResult>
                    </S.SegmentHeader>
                    {
                      filteredData
                      .map(({data, causale, importo}) => {
                        return(
                          <S.Expense>
                            <S.ExpenseHeader>
                              {importo}€ - {data}
                            </S.ExpenseHeader>
                            <S.ExpenseDescription>{causale}</S.ExpenseDescription>
                          </S.Expense>
                        )
                      })
                    }
                  </S.Segment>
                  )
                }
                )

              }
              </S.SegmentsWrapper>

            </React.Fragment>
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