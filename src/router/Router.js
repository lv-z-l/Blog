import History from './history.js'
import Hash from './hash.js'

export default class Router {
  constructor(option) {
    if (this.router) {
      return this.router
    }
    this.router = option.mode === 'history' ? new History(option) : new Hash(option)
    return this.router
  }
}
