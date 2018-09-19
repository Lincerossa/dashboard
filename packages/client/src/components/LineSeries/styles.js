import styled from "styled-components"

export const LineSeriesWrapper = styled.div`
  ${props =>
    props.isOverviewSection
      ? `
      display: grid;
      grid-template-columns: repeat(2 , 50%);
      grid-gap: 1rem;
    `
      : ``};

  .rv-crosshair__line {
    background: ${props => props.theme.colors.high} !important;
  }
`

export const LineSeriesGraph = styled.div`
  position: relative;
  margin: 2rem 0;
`

export const NoDataWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  left: 0;
  top: 3rem;
  background: #1c3449;
  color: white;
`

export const NoData = styled.div``

export const NoDataTitle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const LineSeries = styled.div`
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem 2rem;
  margin-bottom: 30px;

  ${props =>
    props.isOverviewSection
      ? `
    `
      : ``};
`

export const Header = styled.div`
  padding: 1rem;
`

export const HeaderTitle = styled.div`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 1rem;
`

export const HeaderKpi = styled.div`
  display: flex;
  margin-bottom: 1rem;
  > * {
    margin-right: 3rem;
  }
`

export const HeaderKpiColumn = styled.div`
  flex-basis: 25%;
  flex-shrink: 0;
  flex-grow: 1;
  display: ${props => (props.block ? "block" : "flex")};
`

export const HeaderKpiNumber = styled.div`
  font-size: 24px;
  font-weight: 100;
  display: flex;
  align-items: flex-start;
  color: ${props => props.color || "black"};
`

export const HeaderKpiSmallNumber = styled.div`
  font-size: 0.75rem;
  padding: 0 0.25rem;
  color: ${props => props.color || "black"};

  span {
    vertical-align: top;
  }
`

export const Popup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  min-width: 300px;
  padding: 0.5rem;
  z-index: 1;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #f5f5f6;
  display: ${props => (props.full ? "flex" : "block")};
`

export const PopupBlock = styled.div``

export const PopupHeader = styled.div`
  color: ${props => props.theme.colors.high};
  margin-bottom: 2rem 0;
`

export const PopupKpiWrapper = styled.div`
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  grid-gap: 1rem;
`

export const PopupKpi = styled.div``

export const PopupKpiColumn = styled.div``

export const PopupKpiNumber = styled.div`
  font-size: 1.5rem;
  margin-top: 0.75rem;
  color: ${props => props.color || "black"};
`

export const PopupKpiSmallNumber = styled.div`
  font-size: 0.75rem;
  padding: 0 0.25rem;
  color: ${props => props.color || "black"};
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const InfoCol = styled.div`
  flex-basis: 16.65%;
`

export const ColTitle = styled.div`
  color: grey;
  font-size: 0.875rem;
  height: 3.5rem;
`

export const ColSubtitle = styled.div`
  color: red;
  font-size: 1.5rem;
`

export const TextThing = styled.div`
  font-weight: 100;
  display: flex;
`

export const Title = styled.div`
  margin-right: 1rem;
  font-size: 16px;
`

export const Value = styled.div`
  font-size: 24px;
  color: ${props => (props.highlight ? props.theme.colors.high : "#A0A0A0")};
`

export const Increase = styled.div`
  font-weight: bold;
  font-size: 10px;
  color: red;
  margin-left: 0.5rem;
  margin-top: -6px;

  &:after {
    content: "%";
  }
`

export const HeaderDataCompression = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const HeaderBtnDataCompression = styled.button`
  border: 1px solid
    ${props => (props.isActive ? props.theme.colors.high : "#e9e9ec")};
  margin-right: 0.5rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  ${props =>
    props.isActive
      ? `
      color: white;
      background-color: ${props.theme.colors.high};
    `
      : ``} &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.high};
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.high};
  }
`
