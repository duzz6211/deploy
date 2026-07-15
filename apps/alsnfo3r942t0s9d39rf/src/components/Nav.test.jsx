import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Nav from './Nav'

const renderNav = () =>
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  )

describe('Nav', () => {
  it('shows the brand and the main navigation links in the header', () => {
    renderNav()

    // The brand + links also appear in the mobile menu, so scope to the header
    // (<header> has an implicit "banner" role) to query a single instance.
    const header = screen.getByRole('banner')

    expect(within(header).getByAltText('517 EXHIBITS')).toHaveAttribute(
      'src',
      expect.stringContaining('517_logo_1.svg')
    )
    for (const label of ['Home', 'Work', 'About', 'Contact']) {
      expect(within(header).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links the menu to the one-page sections, and Work only via the page anchor', () => {
    renderNav()
    const header = screen.getByRole('banner')

    for (const [label, href] of [
      ['Home', '/#home'],
      ['Work', '/#work'],
      ['About', '/#about'],
      ['Contact', '/#contact'],
    ]) {
      expect(within(header).getByRole('link', { name: label })).toHaveAttribute('href', href)
    }
  })

  it('locks body scroll when the mobile menu opens', async () => {
    renderNav()

    expect(document.body.style.overflow).toBe('')
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(document.body.style.overflow).toBe('hidden')
  })
})
