import React, { Component } from "react"
import {
  XYPlot,
  XAxis,
  HorizontalGridLines,
  YAxis,
  LineMarkSeries,
  Crosshair,
} from "react-vis"
import * as S from "./styles"
import theme from "../../styles/theme"

import Header from "./Header"
import PopupDatapoint from "./PopupDatapoint"

import { getMaxValue, getTot } from "./utility"



export default class myLineSeries extends Component {
  constructor() {
    super()
    this.state = {
      popup: false,
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
        height: 300,
      },
    })
  }


  render() {
    const { popup, XYPlotDimensions } = this.state
    const {
      lines,
      xType,
      xAsis,
      yAxis,
      dateRange: { startDate, endDate },
      interval,
      isOverviewSection,
    } = this.props


    return (
      <S.LineSeries isOverviewSection={isOverviewSection}>

        <S.LineSeriesGraph innerRef={this.svgWrapper}>

          <XYPlot
              {...XYPlotDimensions}
              xType={xType}
              xDomain={[startDate, endDate]}


            >
              <HorizontalGridLines />
              <XAxis title={xAsis} />
              <YAxis title={yAxis} />
              <LineMarkSeries
                strokeWidth={2}
                stroke={color}
                lineStyle={{}}
                markStyle={{
                  fill: "white",
                }}
                sizeRange={[4, 7]}
                data={data}
              />
          </XYPlot>
        </S.LineSeriesGraph>
      </S.LineSeries>
    )
  }
}
