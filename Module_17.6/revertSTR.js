function revertString(str) {
    let revertedStr = '';
  
    if (typeof str !== 'number'){
      for (let i = str.length - 1; i >= 0; i--) {
        revertedStr += str[i];
      } 
      return revertedStr;
    }else{
      return "Это не слово";
    } 
  }


  module.exports = revertString;