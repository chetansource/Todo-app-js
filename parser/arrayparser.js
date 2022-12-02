function array_parser(input){
    input=input.trim()
    if(!input.startsWith('['))return null
    input =input.slice(1).trim() 
    let array=[ ]
    while(input[0] !== ']'){
        let value = value_parser(input)   
        if(value === null) return null
        array.push(value[0])
        input=value[1].trim()
        if(input[0] === ','){
         input=input.slice(1).trim()
        
        }     
    }
    return [array,input.slice(1)]
}
console.log(array_parser('[  ]'))
