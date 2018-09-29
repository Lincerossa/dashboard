import React, { Component } from 'react'
import {Formik} from 'formik'
import axios from 'axios'

import * as S from './styles'
import withLayout from '../../hoc/withLayout'

const validate = values => {
  let errors = {};
  if(!values.text) {
    errors.text = 'Required';
  }
  if(!values.tags) {
    errors.tags = 'Required';
  }
  if(!values.budget) {
    errors.budget = 'Required';
  }
  return errors;
}

class Page extends Component {
  constructor(){
    super()
    this.state={
      segments: [],
      status: null,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleGetSegments = this.handleGetSegments.bind(this)
  }

  componentDidMount(){
    this.handleGetSegments()
  }

  async handleGetSegments(){
    this.setState({
      status: "LOADING"
    })
    const segments = await axios.get("http://localhost:3005/get/segments").then(x => x.data)

    this.setState({
      status: "LOADED",
      segments
    })
  }

  async onSubmit(values, { setSubmitting }) {
    setSubmitting(true)
    await axios.post(
      "http://localhost:3005/post/segment", 
      {  
        data: values,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).catch(e => console.error("errore submit file", e))

    this.handleGetSegments()
    setSubmitting(false)
  }

  render(){

    const { status, segments } = this.state

    return(
      <div>
        <Formik
          validate={validate}
          onSubmit={this.onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              {errors.text && touched.text && errors.text}
              <input
                type="text"
                name="tags"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tags}
              />
              {errors.tags && touched.tags && errors.tags}
              <input
                type="number"
                name="budget"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.budget}
              />
              {errors.budget && touched.budget && errors.budget}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
        {
          status === 'LOADED' &&
          segments &&
          segments.length > 0 &&
          <div>
            {
              segments.map(({text, budget}) => (
                <div>
                  text: {text}
                  budget: {budget}
                </div>
              ))
            }
          </div>
        }
      </div>
    )
  }
}

export default withLayout(Page)