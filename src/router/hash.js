import Base from './Base.js'
export default class Hash extends Base {
  constructor(option) {
    super(option)
    this.location = window.location
    this.routes = option.routes
    window.addEventListener('hashchange', e => {
      this.render()
    })
  }
  getUrl(path) {
    const href = window.location.href
    const i = href.indexOf('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return base + '#' + path
  }
  push(path) {
    this.location.hash = `#${path}`
  }
  go(argu) {
    window.history.go(argu)
  }
  back() {
    this.go(-1)
  }
  replace(path) {
    window.location.replace(this.getUrl(path))
  }
}
