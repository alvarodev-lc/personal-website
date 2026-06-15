import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import Card from '../../components/ProjectCard/Card.vue'

const stubs = { RouterLink: RouterLinkStub }

const base = {
  index: 0,
  image: 'test-bg',
  title: 'My Project',
  desc: 'A short description',
  redirectUrl: '/test',
  negative: false,
}

describe('Card', () => {
  it('renders the title', () => {
    const wrapper = mount(Card, { props: base, global: { stubs } })
    expect(wrapper.text()).toContain('My Project')
  })

  it('renders the description', () => {
    const wrapper = mount(Card, { props: base, global: { stubs } })
    expect(wrapper.text()).toContain('A short description')
  })

  it('uses positive class when negative=false', () => {
    const wrapper = mount(Card, { props: base, global: { stubs } })
    expect(wrapper.find('.proj-card-title').exists()).toBe(true)
    expect(wrapper.find('.proj-card-titleneg').exists()).toBe(false)
  })

  it('uses negative class when negative=true', () => {
    const wrapper = mount(Card, { props: { ...base, negative: true }, global: { stubs } })
    expect(wrapper.find('.proj-card-titleneg').exists()).toBe(true)
    expect(wrapper.find('.proj-card-title').exists()).toBe(false)
  })

  it('index=0 → animationDelay 0s  (row 0, col 0)', () => {
    const wrapper = mount(Card, { props: { ...base, index: 0 }, global: { stubs } })
    expect(wrapper.find('.box').attributes('style')).toContain('animation-delay: 0s')
  })

  it('index=1 → animationDelay 0.08s (row 0, col 1)', () => {
    const wrapper = mount(Card, { props: { ...base, index: 1 }, global: { stubs } })
    expect(wrapper.find('.box').attributes('style')).toContain('animation-delay: 0.08s')
  })

  it('index=2 → animationDelay 0.08s (row 1, col 0)', () => {
    const wrapper = mount(Card, { props: { ...base, index: 2 }, global: { stubs } })
    expect(wrapper.find('.box').attributes('style')).toContain('animation-delay: 0.08s')
  })

  it('index=3 → animationDelay 0.16s (row 1, col 1)', () => {
    const wrapper = mount(Card, { props: { ...base, index: 3 }, global: { stubs } })
    expect(wrapper.find('.box').attributes('style')).toContain('animation-delay: 0.16s')
  })
})
