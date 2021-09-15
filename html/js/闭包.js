function a() {
    function b() {
      var bbb = 234;
      console.log(aaa);
    }
    var aaa = 123;
    return b;
  }
  var glob = 100;
  var demo = a();
  demo();

  function test(a, b, c,d) {
    console.log(a + b + C + d) ;
    }(1,2,3,4);


    //闭包  这是在es5下的做法，es6中可以直接用let
for (var i = 0; i < 5; i++) {
  ( function (x) {
  setTimeout(function() { console.log(x); }, x * 1000 )
    })(i)
  }
  console.log(i)

for (var i = 0; i < 5; i++) {
  console.log('a') //先执行同步 主线程内容 1
  setTimeout(function() { console.log(i); }, i * 1000 ); //最后才是异步的任务队列中的事件
}
console.log('b') //主线程 2

//在ES2015上下文中，您可以在原始代码中简单地使用let而不是var：
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}