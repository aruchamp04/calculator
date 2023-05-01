
const Output = document.getElementById("output");

function display(num)
{
    Output.value +=num;
}
function calculate(){
    try{
        Output.value = eval(Output.value)
    }
    catch(err){
        alert("invalid❌check and try again!");
    }
}
function Clear(){
    Output.value="";
}
function del(){
    Output.value=Output.value.slice(0,-1);
}
