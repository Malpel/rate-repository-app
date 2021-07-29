export const numberFormat = (number) => {
  return number >= 1000 ? (Math.round((number / 1000) * 10) / 10).toString() + 'k' : number.toString(); 
};