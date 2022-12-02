
function object_parser(input){
    input=input.trim()
    if(!input.startsWith('{')) return null
    input=input.slice(1)
    let object={}
    while(input[0] !== '}'){
        let value=string_parser(input)
        console.log(value)
        if(value === null) return null
        let key = value[0]
        input=value[1].trim()
        if(!input.startsWith(':')) return null
        input=input.slice(1)
        value = value_parser(input)
        if(value === null) return null
        object[key] = value[0]
        input=value[1].trim()
        if(input[0] === ','){ 
            input=input.slice(1).trim()
        }
    }
    return [object,input.slice(1)]
}