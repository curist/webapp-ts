import m from 'mithril'

import Counter from 'src/widgets/Counter'

export default {
  view() {
    return m('.app', [
      m('h1', 'hello world!'),
      m(Counter),
      m(Counter),
    ])
  },
}
