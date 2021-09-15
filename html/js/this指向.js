var myObject = {
    foo: "bar",
    
    func: function() {
        var self = this;
        console.log('this1:',this) //myObject  { foo: 'bar', func: [Function: func] }
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log('this2:',this)
            console.log('self:',self) //self:myObject  { foo: 'bar', func: [Function: func] }
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();