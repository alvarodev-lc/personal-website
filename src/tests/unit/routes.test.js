import { describe, it, expect } from 'vitest'
import { ROUTES } from '../../routes'

describe('ROUTES', () => {
  it('HOME is /home', () => expect(ROUTES.HOME).toBe('/home'))
  it('ABOUT is /about', () => expect(ROUTES.ABOUT).toBe('/about'))
  it('PROJECTS is /projects', () => expect(ROUTES.PROJECTS).toBe('/projects'))
  it('PROJECTS_POKEDEX is /projects/pokedex', () => expect(ROUTES.PROJECTS_POKEDEX).toBe('/projects/pokedex'))
  it('PROJECTS_PORTAL_VR is /projects/portal-vr', () => expect(ROUTES.PROJECTS_PORTAL_VR).toBe('/projects/portal-vr'))
  it('PRIVACY is /privacy', () => expect(ROUTES.PRIVACY).toBe('/privacy'))
})
