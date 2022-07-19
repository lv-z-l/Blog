class Action {
  constructor() {
    this.sleepOver = true
    this.firstOver = true
  }
  sleep(time) {
    this.sleepOver = false
    setTimeout(() => {
      console.log('Wake up after ' + time)
      this.sleepOver = true
    }, time * 1000)
    return this
  }
  eat(something) {
    let timer
    timer = setTimeout(() => {
      if (this.firstOver && this.sleepOver) {
        console.log(something)
        clearTimeout(timer)
        timer = null
      } else {
        clearTimeout(timer)
        timer = this.eat(something)
      }
    })
    return this
  }
  sleepFirst(time) {
    this.firstOver = false
    setTimeout(() => {
      console.log('Wake up after ' + time)
      this.firstOver = true
    }, time * 1000)
    return this
  }
}
function LazyMan(name) {
  const action = new Action()
  action.eat('Hi This is ' + name)
  return action
}

// LazyMan('hank')
LazyMan('Hank').sleep(10).eat('dinner')
// LazyMan('Hank').eat('dinner').eat('supper')

// LazyMan('Hank').eat('supper').sleepFirst(5)
