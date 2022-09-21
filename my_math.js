module.exports = (()=>{
    function a(x,y){
        return x+y;
    }
    function b(x,y){
        return x-y;
    }
    function c(x,y){
        return x*y;
    }
    function d(x,y){
        return x/y;
    }

    let Pi = 3.14

    return {
        add: a,
        subtract:b,
        multiply:c,
        divide:d,
        pi:Pi
    }
})()