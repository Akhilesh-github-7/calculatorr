// function to display content 
function displayContent(content){
    result.value +=content
}
// clear input
function calcclear(){
    result.value = ""
}
// result
function calcOutput(){
    result.value = eval(result.value)
}
// backspace
function removelastdigit(){
    result.value = result.value.slice(0,-1)
}