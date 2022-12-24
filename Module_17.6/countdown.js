function countDown(num){
    let summ = "";
    if (num <=0){
        return summ=num;
    }else
    for(let i = num; i>0; i--){

        summ +=i;
    }
    return Number(summ);
}

module.exports = countDown;