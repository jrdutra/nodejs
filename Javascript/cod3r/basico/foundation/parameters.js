function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1,2,3,4,5)
logParams(1,2,3)
logParams(1,2)
logParams(1)
logParams()

function defaultParams(a, b, c = 3){
    console.log(a, b, c)
}

defaultParams(7,8,9)
defaultParams(7,8)

//spread/rest
function logNums(...nums){
    console.log(nums)
}

logNums(1,2,3,4,5,6)

