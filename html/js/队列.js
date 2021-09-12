function A(){
  var  array1=[];
  for(var i=0;i<5;i++){
    array1[i]=function (){
    
    return i;
  }
 
}
console.log(array1[1]); 
}
