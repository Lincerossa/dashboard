import styled from 'styled-components'


export const Loading = styled.div``


export const Segment = styled.div`
  margin-bottom: 2rem;

`

export const SegmentsWrapper = styled.div`
  padding: 2rem;
`

export const SegmentWrapperHeader = styled.div`
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.sansSerif};
  letter-spacing: .03rem;
  margin-bottom: 1rem;
`


export const SegmentHeader = styled.div`
  margin-bottom: 1rem;
`

export const SegmentBudget = styled.div`
margin-bottom: .25rem;
`


export const SegmentText = styled.div`
  font-size: 1.5rem;
  letter-spacing: .04rem;
  text-transform: capitalize;
  margin-bottom: .25rem;
`
export const SegmentTag = styled.div`
  font-size: .75rem;
  border: 1px solid white;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.b};
  display: inline-block;
  color: white;
  padding: .25rem;
  
`

export const Expense = styled.div`
  margin-bottom: .75rem;
  background: #f8f8f8;
  padding: .5rem;
  box-shadow: 0px 6px 9px 0px rgba(0,0,0,0.06);
`

export const ExpenseHeader = styled.div`
  font-weight: 600;
  margin-bottom: .25rem;
`

export const ExpenseDescription = styled.div`
  font-size: .6rem;
`

export const SegmentResult = styled.div`
  display: flex;

  div{
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
    font-weight: 600;
    color: white;
    letter-spacing: .1rem;
    background-color: ${props => `hsla(${props.color < 0 ? 0 : props.color},50%, 65%,100%)`};
  }
  

`