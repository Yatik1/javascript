function calculate(a,b,fnCall) {

//    function fnCall(a,b) {
//        return a+b
//    }

   const ans = fnCall(a,b) 
   return ans;
}

function sum(a,b) {
    return a+b;
}

const value = calculate(5,2,sum);
console.log(value);