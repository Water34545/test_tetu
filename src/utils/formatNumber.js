const formatNumber = (number) => {
  if(number > 10**6) {
    return `${Math.floor(number/10**6, 2)}M`
  }
  else {
    return `${Math.floor(number/10**3, 2)}K`
  }
}

export default formatNumber;