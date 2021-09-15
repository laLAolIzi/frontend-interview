function sum(x,y = null) {
    if (y !== null){
        return x + y;
    }
    return function(y){
        return x + y;
    }
}
sum(2,3)
sum(2)(3)