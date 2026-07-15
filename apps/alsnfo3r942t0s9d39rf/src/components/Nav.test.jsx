import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Nv from './Nav'

const rN = () =>
  render(
    <MemoryRouter>
      <Nv />
    </MemoryRouter>
  )

describe('Nav', () => {
  it('shows the brand and the main navigation links in the header', () => {
    rN()

    const hd = screen.getByRole('banner')

    expect(within(hd).getByAltText('517 EXHIBITS')).toHaveAttribute(
      'src',
      expect.stringContaining('517_logo_1.svg')
    )
    for (const lb of ['Home', 'Work', 'About', 'Contact']) {
      expect(within(hd).getByRole('link', { name: lb })).toBeInTheDocument()
    }
  })

  it('links the menu to the one-page sections, and Work only via the page anchor', () => {
    rN()
    const hd = screen.getByRole('banner')

    for (const [lb, hf] of [
      ['Home', '/#home'],
      ['Work', '/#work'],
      ['About', '/#about'],
      ['Contact', '/#contact'],
    ]) {
      expect(within(hd).getByRole('link', { name: lb })).toHaveAttribute('href', hf)
    }
  })

  it('locks body scroll when the mobile menu opens', async () => {
    rN()

    expect(document.body.style.overflow).toBe('')
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(document.body.style.overflow).toBe('hidden')
  })
})
