import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Bn from './Btn'

describe('Btn', () => {
  it('renders a <button> and fires onClick', async () => {
    const oc = vi.fn()
    render(<Bn onClick={oc}>보내기</Bn>)

    const bt = screen.getByRole('button', { name: '보내기' })
    await userEvent.click(bt)

    expect(bt).toBeInTheDocument()
    expect(oc).toHaveBeenCalledOnce()
  })

  it('renders a router link when `to` is given', () => {
    render(
      <MemoryRouter>
        <Bn to="/contact">문의하기</Bn>
      </MemoryRouter>
    )

    const lk = screen.getByRole('link', { name: '문의하기' })
    expect(lk).toHaveAttribute('href', '/contact')
  })

  it('renders a plain anchor when `href` is given', () => {
    render(<Bn href="https://example.com">외부 링크</Bn>)

    const lk = screen.getByRole('link', { name: '외부 링크' })
    expect(lk).toHaveAttribute('href', 'https://example.com')
  })
})
