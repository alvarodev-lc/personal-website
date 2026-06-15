import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProgressBar from '../../components/ProgressBar/ProgressBar.vue'

describe('ProgressBar', () => {
  const baseProps = { progress: '75', background: 'red', delay: '2' }

  it('renders the progress percentage as text', () => {
    const wrapper = mount(ProgressBar, { props: baseProps })
    expect(wrapper.text()).toContain('75%')
  })

  it('applies a fill class scoped to the progress value', () => {
    const wrapper = mount(ProgressBar, { props: baseProps })
    expect(wrapper.find('.progressbar-fill-75').exists()).toBe(true)
  })

  it('generated CSS sets width to the progress value', () => {
    const wrapper = mount(ProgressBar, { props: baseProps })
    expect(wrapper.find('style').text()).toContain('width: 75%')
  })

  it('animation duration = 1 + delay seconds (delay=2 → 3s)', () => {
    const wrapper = mount(ProgressBar, { props: baseProps })
    expect(wrapper.find('style').text()).toContain('3s')
  })

  it('delay="0" produces a 1s animation duration', () => {
    const wrapper = mount(ProgressBar, { props: { ...baseProps, delay: '0' } })
    expect(wrapper.find('style').text()).toContain('1s')
  })

  it('generated CSS uses the provided background value', () => {
    const wrapper = mount(ProgressBar, { props: baseProps })
    expect(wrapper.find('style').text()).toContain('background: red')
  })
})
