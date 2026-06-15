import { describe, it, expect, vi } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '../../components/Navbar/Navbar.vue'

vi.mock('../../components/ContactModal/ContactModal.vue', () => ({
  default: { template: '<div />' },
}))

const stubs = { RouterLink: RouterLinkStub }

describe('Navbar', () => {
  it('renders all menu item labels', () => {
    const wrapper = mount(Navbar, { global: { stubs } })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('About me')
    expect(wrapper.text()).toContain('Projects')
  })

  it('menu is closed on mount (no .active class)', () => {
    const wrapper = mount(Navbar, { global: { stubs } })
    expect(wrapper.find('.c-nav-menu.active').exists()).toBe(false)
  })

  it('clicking the hamburger opens the menu', async () => {
    const wrapper = mount(Navbar, { global: { stubs } })
    await wrapper.find('.c-menu-icon').trigger('click')
    expect(wrapper.find('.c-nav-menu.active').exists()).toBe(true)
  })

  it('clicking the hamburger twice closes the menu again', async () => {
    const wrapper = mount(Navbar, { global: { stubs } })
    await wrapper.find('.c-menu-icon').trigger('click')
    await wrapper.find('.c-menu-icon').trigger('click')
    expect(wrapper.find('.c-nav-menu.active').exists()).toBe(false)
  })

  it('mobileCSS has margin-bottom: 80px when menu is closed', () => {
    const wrapper = mount(Navbar, { global: { stubs } })
    expect(wrapper.find('style').text()).toContain('margin-bottom: 80px')
  })

  it('mobileCSS has margin-bottom: 300px when menu is open', async () => {
    const wrapper = mount(Navbar, { global: { stubs } })
    await wrapper.find('.c-menu-icon').trigger('click')
    expect(wrapper.find('style').text()).toContain('margin-bottom: 300px')
  })
})
