import Base from './Base.js'
export default class History extends Base {
  constructor(option) {
    super(option)
    this.routes = option.routes
    this.history = window.history
    this.viewContiner = document.body.querySelector(option.selector)
    window.addEventListener('popstate', e => {
      this.render()
    })
  }
  push(path) {
    this.history.pushState(null, null, path)
    this.render()
  }
  go(argu) {
    this.history.go(argu)
  }
  back() {
    this.history.back()
  }
  replace(path) {
    this.history.replaceState(null, null, path)
    this.render()
  }
  addRoutes(routes) {
    const keys = Object.keys(routes)
    for (let i = 0; i < keys.length; i++) {
      if (Reflect.has(this.routes, keys[i])) {
        continue
      }
      this.routes[keys[i]] = routes[keys[i]]
    }
  }
}
