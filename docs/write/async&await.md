```js
function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}
function fn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 5000)
  })
}
```

```js
async function test() {
  const res1 = await fn1()
  console.log(res1)
  const res2 = await fn2()
  console.log(res2)
}
```



```js
function* asdff() {
  const res1 = yield fn1()
  const res2 = yield fn2()
  return res1 * res2
}

// const ss = asdff()
// const res1 = ss.next()
// console.log(res1)
// const res2 = ss.next(2)
// console.log(res2)
// console.log(ss.next(2))

// function generatorToAsync(generator) {
//   const ss = generator()
//   const next1 = ss.next()
//   next1.value.then(res1 => {
//     console.log(res1)
//     console.log(next1)
//     const next2 = ss.next(res1)
//     next2.value.then(res2 => {
//       console.log(res2)
//       console.log(next2)
//       console.log(ss.next())
//     })
//   })
// }

```


```js
function generatorToAsync(generator) {
  return function (...args) {
    const generatorRes = generator.apply(this, args)
    return new Promise((resolve, reject) => {
      const callNext = current => {
        if (current.done) {
          return resolve(current.value)
        }
        let newCurrent
        Promise.resolve(current.value).then(res => {
          try {
            newCurrent = generatorRes.next(res)
          } catch (error) {
            return reject(error)
          }
          callNext(newCurrent)
        })
      }
      const first = generatorRes.next()
      callNext(first)
    })
  }
  
}

const likeAsync = generatorToAsync(asdff)
likeAsync().then(res => console.log(res))

```

