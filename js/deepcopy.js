//这种方式不能copy undefined和null
function deepClone(obj) {
    var _obj = JSON.stringify(obj);
    objclone = JSON.parse(_obj);
    return objclone;
}

let obj1 = {
    a: {
        c: /a/,
        d: undefined,
        b: null
    },
    b: function () {
        console.log(this.a)
    },
    c: [
        {
            a: 'c',
            b: /b/,
            c: undefined
        },
        'a',
        3
    ]
}
let obj2 = deepClone(obj1);
console.log(obj2);