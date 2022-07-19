// setTimeout(() => {

// }, timeout);

// setInterval
let timer
// function test(fn, time) {
//   timer = setTimeout(() => {
//     fn()
//     test(fn, time)
//   }, time)
// }

function test(fn, time) {
  timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, time)
}

function clear() {
  clearTimeout(timer)
}

function debounce(fn, time) {
  let timer
  return function (...argu) {
    if (timer) {
      console.log('clear')
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(null, argu)
      clearTimeout(timer)
      timer = null
    }, time)
  }
}

function throttle(fn, time) {
  let flag = true
  return function (...argu) {
    if (!flag) {
      return
    }
    flag = false
    let timer = setTimeout(() => {
      fn.apply(null, argu)
      flag = true
      clearTimeout(timer)
      timer = null
    }, time)
  }
}

// test(() => console.log(111), 2000)

const fn = argu => console.log(argu)

// const debFn = debounce(fn, 1000)

const thoFn = throttle(fn, 1000)

setInterval(() => thoFn('1200'), 100)
