export const isPrime = (inputNum) => {
  const flag = true;

  if(inputNum <= 1){
    return !flag;
  }
  
  for (let i = 2; i < inputNum; i++) {
    if (inputNum % i === 0) {
      return !flag; 
    } 
  }

  return flag;
};

