// // setTimeout(() => {

// // }, timeout);

// // setInterval
// let timer
// // function test(fn, time) {
// //   timer = setTimeout(() => {
// //     fn()
// //     test(fn, time)
// //   }, time)
// // }

// function test(fn, time) {
//   timer = setInterval(() => {
//     fn()
//     clearInterval(timer)
//   }, time)
// }

// function clear() {
//   clearTimeout(timer)
// }

// function debounce(fn, time) {
//   let timer
//   return function (...argu) {
//     if (timer) {
//       console.log('clear')
//       clearTimeout(timer)
//       timer = null
//     }
//     timer = setTimeout(() => {
//       fn.apply(null, argu)
//       clearTimeout(timer)
//       timer = null
//     }, time)
//   }
// }

// function throttle(fn, time) {
//   let flag = true
//   return function (...argu) {
//     if (!flag) {
//       return
//     }
//     flag = false
//     let timer = setTimeout(() => {
//       fn.apply(null, argu)
//       flag = true
//       clearTimeout(timer)
//       timer = null
//     }, time)
//   }
// }

// // test(() => console.log(111), 2000)

// const fn = argu => console.log(argu)

// // const debFn = debounce(fn, 1000)

// const thoFn = throttle(fn, 1000)

// setInterval(() => thoFn('1200'), 100)

function printMe() {
  var mem = process.memoryUsage()
  var format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(0) + ' MB'
  }
  localStorage
  console.log('ToTal: ' + format(mem.heapTotal) + ' Used: ' + format(mem.heapUsed))
}

const arr = []
const size = 30 * 1024 * 1024
for (let i = 0; i < 15; i++) {
  arr.push(new Array(size))
  printMe()
}
