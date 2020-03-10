module.exports = function check(str, bracketsConfig) {
  let bracketsList = [];
  if (str.length == 0 || str.length % 2 != 0){
    return false;
  } else {
    for(let i=0; i < bracketsConfig.length;){
      bracketsList = bracketsConfig[i].join('');
      console.log(bracketsList);
      if(str.includes(bracketsList)){
        str = str.replace(bracketsList, '');
        console.log(str);
        i = 0;
      } else {i++};
    }
    if(!str.length) {
      return true;
    } else {
      return false;
    }
  } 
}

