function match (word1, word2){
    //let newWord1 = word1.toLowerCase();
   // let newWord2 = word2.toLowerCase();
     if (typeof word1 === Number || typeof word2 === Number || word1 !== word2){
         return false;
     }else if (word1 === word2){
        return true;
    }
     }
     

 module.exports = match;