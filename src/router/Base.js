export default class Base {
  constructor(option) {
    this._option = option
    this.viewContiner = document.body.querySelector(option.selector)
  }
  render() {
    const hash = this._option.mode === 'hash' ? this.location.hash.replace('#', '') : window.location.pathname
    const route = this.getComponent(hash)
    if (this.viewContiner.childNodes[0]) {
      this.viewContiner.removeChild(this.viewContiner.childNodes[0])
    }
    this.viewContiner.innerHTML = route.component
  }
  getComponent(path = window.location.pathname) {
    return this.routes[path]
  }
}
