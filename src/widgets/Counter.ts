import m from 'mithril'

export default () => {
  const state = {
    count: 0,
  }

  const plusOne = () => state.count++

  const view = () => {
    const { count } = state
    return m('.counter', [
      'count: ',
      count,
      m('button', { onclick: plusOne }, '+')
    ])
  }

  return { view }
} 
