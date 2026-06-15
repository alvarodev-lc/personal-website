import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent } from 'vue'
import ContactModal from '../../components/ContactModal/ContactModal.vue'

vi.mock('primevue/dialog', () => ({
  default: defineComponent({
    props: ['visible'],
    template: '<div v-if="visible"><slot /><slot name="footer" /></div>',
  }),
}))

vi.mock('primevue/button', () => ({
  default: defineComponent({
    props: ['label', 'id'],
    template: '<button :id="id" @click="$emit(\'click\')">{{ label }}</button>',
    emits: ['click'],
  }),
}))

vi.mock('../../components/CVModal/CVModal.vue', () => ({
  default: { template: '<div />' },
}))

describe('ContactModal', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      configurable: true,
    })
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the Contact button', () => {
    const wrapper = mount(ContactModal)
    expect(wrapper.find('#contact-button').exists()).toBe(true)
  })

  it('dialog content is hidden before Contact is clicked', () => {
    const wrapper = mount(ContactModal)
    // The stub only renders slot content when visible=true
    expect(wrapper.find('#clipboard_toastr').exists()).toBe(false)
  })

  it('dialog content becomes visible when Contact button is clicked', async () => {
    const wrapper = mount(ContactModal)
    await wrapper.find('#contact-button').trigger('click')
    expect(wrapper.find('#clipboard_toastr').exists()).toBe(true)
  })

  it('clicking the clipboard button calls clipboard.writeText with the email', async () => {
    const wrapper = mount(ContactModal)
    await wrapper.find('#contact-button').trigger('click')
    await wrapper.find('.smallbutton').trigger('click')
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('alvaro.lopez19997@gmail.com')
  })

  it('toastr has .show class immediately after copying', async () => {
    const wrapper = mount(ContactModal)
    await wrapper.find('#contact-button').trigger('click')
    await wrapper.find('.smallbutton').trigger('click')
    expect(wrapper.find('#clipboard_toastr.show').exists()).toBe(true)
  })

  it('toastr loses .show class after 3 seconds', async () => {
    const wrapper = mount(ContactModal)
    await wrapper.find('#contact-button').trigger('click')
    await wrapper.find('.smallbutton').trigger('click')
    vi.advanceTimersByTime(3000)
    await flushPromises()
    expect(wrapper.find('#clipboard_toastr.show').exists()).toBe(false)
  })
})
