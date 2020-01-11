
var name = 'World!';
(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})();

// 输出什么？为什么？



















// 变量声明提升的作用
// 在一个函数体内声明的变量，JS解析器都会将其移动到函数体的顶部

// var name = 'World!';
// (function () {
//     if (typeof name === 'undefined') {
//         var name = 'Jack';
//         console.log('Goodbye ' + name);
//     } else {
//         console.log('Hello ' + name);
//     }
// })();
// 等价为==>

// var name = 'World!';
// (function () {
//     var name;    
//     if (typeof name === 'undefined') {
//         name = 'Jack';
//         console.log('Goodbye ' + name);
//     } else {
//         console.log('Hello ' + name);
//     }
// })();
// 执行的时候有个变量查找的过程，如果在当前函数体内没找到，就会到定义的函数体的外层函数中去寻找，一直向上到全局对象中寻找，还是找不到就会报TypeError错误

