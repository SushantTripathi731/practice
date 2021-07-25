

function calc(){
    var url="https://api.exchangeratesapi.io/latest?base="
    var select2value=document.getElementById('select2').value;
    var select1value=document.getElementById('select1').value;
    var newurl=url+select1value;
fetch( newurl)
.then(
    res=>res.json()

)
.then(data=>{
    var ratesArray=Object.keys(data.rates);
   var index= match(select2value, ratesArray)
   var inputval=document.getElementById('input').value;
   var arrayofintrates=Object.values(data.rates)
   var result=inputval*arrayofintrates[index];
   document.getElementById('showresult').value=result;

})
}
function match(val,Array){
    var i;
    for(i=0;Array[i]!=val;i++);
    return i;
}


