const formatNumber = (number) => {
  const decimalNum = number/10**18;

  if(decimalNum > 10**6) {
    return `${Math.round(decimalNum/10**4)/100}M`;
  }
  if(decimalNum > 10**3) {
    return `${Math.round(decimalNum/10)/100}K`;
  }

  return Math.round(decimalNum*100)/100;
}

export default formatNumber;