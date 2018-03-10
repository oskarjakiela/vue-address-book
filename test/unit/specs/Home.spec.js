import Vue from 'vue';
import Home from '@/views/Home';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.Home h1').textContent)
      .toEqual('Home');
  });
});
