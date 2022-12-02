function great(a){

a=a.slice(2)
while(a.length){
    a=a.slice(1)
    a=a.toString()
    console.log(a)
    if(a.startsWith(',')) return a[0]
    return null
}
}
console.log(great([,1,2,3,4,5,6,4,3,4]))
