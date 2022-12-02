// function string_parser(input){
//     input=input.trim()
//     if(!input.startsWith('"'))return null
//     let outputstring=''
//     const esccharacters=['"','\\','/','b','f','n','r','t']
//     input=input.slice(1)
//     while(input.length){
//         if(input[0] === '"')return [outputstring,input.slice(1)]
//         if(input[0].match(/[\u0000-\u001f]/i)) return null //control characters
//         if(input[0] === '\\'){
//         if(input[1].startsWith(esccharacters)){  //esccharacters
//             outputstring +=input[1]
//             input=input.slice(2)
//         }
//         else if(input[1] === 'u'){
//             if(input.slice(2,6).match(/[\da-f]{4}/) === null) return null    //hex digits
//             outputstring += String.fromCharCode(parseInt(input.slice(2,6),16))
//             input=input.slice(6)
//         }
//         else return null
//         }
//         else{
//             outputstring += input[0]
//             input=input.slice(1)
//         }
            
//     }
//     return null
// }


function stringParser (input) {
input=input.trim()
if(!input.startsWith('"')) return null
input=input.slice(1)
parsedstring =''
const esccharacters=['"','\\','/','b','f','n','r','t','u']
const invalid=[9,10]
let i=0
while(!input[i].startsWith('"')){
    if(invalid.includes(input[i].charCodeAt(0)))return null
    if(input[i] === '\\'){
       if(!esccharacters.includes(input[i+1])) return n
        if(input[i+1] === 'u'){
            i +=4
        }
        i +=2
    }
    else i++
}
return [input.slice(0,i),input.slice(i+1)]
}
// console.log(stringParser('"chetan\rkumar"'))
// console.log(stringParser(''))

const fs = require('fs')
const data = fs.readFileSync(`fail${16}.json`, 'utf8')
console.log(`fail${16}` , stringParser(data))

























