import m from 'mithril'
import App from 'src/components/App'


function mountApplication() {
  const root = document.getElementById('app')
  m.mount(root, App)
}

function init() {
  // TODO should/can require styles here
  require('src/styles/main.less')
  mountApplication()
}

window.onload = init

if(module.hot) {
  module.hot.accept(function () {
    init()
  })
}
