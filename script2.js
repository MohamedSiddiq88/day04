let request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    let result=JSON.parse(request.response);
    //console.log(result);
    for(let i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}
