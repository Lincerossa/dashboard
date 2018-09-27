import React, { Component } from "react"
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  MarkSeries
} from "react-vis"
import * as S from "./styles"
import theme from "../../styles/theme"


export default class myLineSeries extends Component {
  constructor() {
    super()
    this.state = {
      XYPlotDimensions: null,
    }
    this.svgWrapper = React.createRef()
    this.getXYPlotDimensions = this.getXYPlotDimensions.bind(this)
  }

  componentDidMount() {
    this.getXYPlotDimensions()
  }

  getXYPlotDimensions() {
    const svgWrapper = this.svgWrapper.current
    this.setState({
      XYPlotDimensions: {
        width: svgWrapper.offsetWidth,
        height: 600,
      },
    })
  }


  render() {
    const { XYPlotDimensions } = this.state
    const {
      data,
    } = this.props
    
    return (
      <S.LineSeries innerRef={this.svgWrapper}>

          { XYPlotDimensions && 
            <XYPlot
                {...XYPlotDimensions}
                xType="time"
                yDomain={[-1500, 2500]}
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} style={{fill: theme.colors.a, stroke: theme.colors.d}} />
                <MarkSeries data={data} style={{fill: theme.colors.d}} />
            </XYPlot>
          }
      </S.LineSeries>
    )
  }
}
