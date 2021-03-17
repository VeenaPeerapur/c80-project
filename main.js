function getPara()
{
    var inputs=[];
    for(i=1;i<=5;i++)
    {
        inputs.push(document.getElementById("input_"+i).value);
        console.log(inputs);
        document.getElementById("showPara").innerHTML=inputs.join(".");
    }
}