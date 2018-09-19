export const getMaxValue = lines =>
  lines
    .map(
      line =>
        line &&
        line.length > 0 &&
        line.reduce((max, value) => {
          const { y } = value
          if (y > max) {
            max = y
          }
          return max
        }, 0)
    )
    .reduce((max, value) => {
      if (value > max) {
        max = value
      }
      return max
    }, 0)

export const getPercentageIncrease = (currentTot, previousTot) => {
  const percentageIncrease = ((currentTot - previousTot) / previousTot) * 100
  return isNaN(percentageIncrease) || percentageIncrease === Infinity
    ? "-"
    : percentageIncrease.toFixed(2)
}

export const getPercentage = (a, b) => {
  const GG = (a / b) * 100
  return isNaN(GG) || GG === Infinity ? "-" : GG.toFixed(2)
}

export const getTot = series => {
  if (!series || !series.length) return 0
  return series.reduce((acc, value) => acc + value.y, 0)
}
