//Number parser
 
let numberparser = function(input){
    input=input.trim()
    let regex=/^-?([1-9]\d*|0)(\.\d+)?([Ee][-+]?\d+)?/
        regoutput = input.match(regex)
        console.log(regoutput)
        if( regoutput !== null){
                return[regoutput[0],input.slice(regoutput[0].length)]
        }
        return null

}
// function numberparser (input) {
//         const output = input.match(/^-?([1-9]\d*|0)(\.\d+)?([eE][+-]?\d+)?/)
//         if (output === null) { return null }
//         return [Number(output[0]), input.slice(output[0].length)]
//       }

console.log(numberparser('1.234567890E+34'))
