let obj1={name:"person",age:"5"};
let obj2={age:"5",name:"person"};
let a=Object.keys(obj1).sort();
let b=Object.keys(obj2).sort();
let flag=false;
 console.log(deepCompare(obj1,obj2));
function deepCompare(obj1,obj2){
if(a.length===b.length){
    for(let i=0;i<a.length;i++){
        flag=false;
        if(a[i]===a[i]){
            if(obj1[a[i]]===obj2[a[i]]){
                flag=true;
            }
        }
    }
}
return flag;
 }
