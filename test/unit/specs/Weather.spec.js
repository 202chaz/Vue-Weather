import Vue from 'vue'
import Weather from '@/components/Weather'

describe('Weather.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Weather )
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('input').length).to.equal(1)
    expect(vm.$el.querySelector('button').textContent).to.equal('Search')
  })
})
