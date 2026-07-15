import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Btn from './Btn'

describe('Btn', () => {
  it('renders a <button> and fires onClick', async () => {
    const onClick = vi.fn()
    render(<Btn onClick={onClick}>보내기</Btn>)

    const button = screen.getByRole('button', { name: '보내기' })
    await userEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('renders a router link when `to` is given', () => {
    render(
      <MemoryRouter>
        <Btn to="/contact">문의하기</Btn>
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: '문의하기' })
    expect(link).toHaveAttribute('href', '/contact')
  })

  it('renders a plain anchor when `href` is given', () => {
    render(<Btn href="https://example.com">외부 링크</Btn>)

    const link = screen.getByRole('link', { name: '외부 링크' })
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
