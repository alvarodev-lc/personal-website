import { describe, it, expect } from 'vitest'
import { menuItems } from '../../components/Navbar/menuItems'

describe('menuItems', () => {
  it('exports exactly 3 items', () => {
    expect(menuItems).toHaveLength(3)
  })

  it.each(menuItems)('item "$title" has title, url and cName', (item) => {
    expect(item).toHaveProperty('title')
    expect(item).toHaveProperty('url')
    expect(item).toHaveProperty('cName')
  })

  it('contains Home, About me and Projects', () => {
    const titles = menuItems.map(i => i.title)
    expect(titles).toEqual(expect.arrayContaining(['Home', 'About me', 'Projects']))
  })

  it('all urls start with /', () => {
    menuItems.forEach(item => expect(item.url).toMatch(/^\//))
  })
})
