import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../../redux/expenses/actions'
import { getExpenses, getExpensesStatus } from '../../redux/expenses/reducer'
import * as S from './styles'
import { Table } from '../../components'
import withLayout from '../../hoc/withLayout'

class Page extends Component {
  constructor() {
    super()
    this.form = React.createRef()
    this.input = React.createRef()
    this.state = {
      isUploading: null,
      file: null,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.handleLoadData = this.handleLoadData.bind(this)
  }

  componentDidMount() {
    this.handleLoadData()
  }


  async handleFormSubmit(e){
    e.preventDefault()
    const { file, loading } = this.state
    if(file && !loading) {

      this.setState({
        isUploading: true,
      })
      const formData = new FormData()
      formData.append('expenses', file)

      await axios.post(
        "http://localhost:3005/post/expenses", 
        formData,
        { 
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).catch(e => console.error("errore submit file", e))

      await this.handleLoadData()
      
    }
    this.setState({
      isUploading: false
    })
  }

  handleChangeFile(e){
    const file = e.target.files && e.target.files[0]
    this.setState({
      file
    })
  }

  async handleLoadData(){
    const { asyncSetExpenses } = this.props
    asyncSetExpenses()
  }

  render() {
    const { expenses, status } = this.props
    const { isUploading } = this.state

    return (
      <div>
        <S.FormUpload 
          enctype="multipart/form-data"
          onSubmit={this.handleFormSubmit}
        >
          <S.Input
            type="file"
            name="file"
            id="file"
            onChange={this.handleChangeFile}
          />
          
          <button 
            type="submit"
          >carica file</button>
        </S.FormUpload>
        {
          (status === 'LOADING')
            ? <S.Loading>Caricamento in corso</S.Loading>
            : expenses && expenses.length && <Table 
                data={expenses} 
                defaultPageSize={expenses.length}
                columns = {[{
                  id: 'Data',
                  Header: 'Data',
                  Cell: ({original}) => original.data,
                  accessor: 'Data'
                }, {
                  id: 'Importo',
                  Header: 'Importo',
                  Cell: ({original}) => Number(original.importo),
                  accessor: 'Importo',
                }, {
                  id: 'Causale',
                  Header: 'Causale',
                  Cell: ({original}) => original.causale,
                  accessor: 'Causale'
                }]}
              />
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
