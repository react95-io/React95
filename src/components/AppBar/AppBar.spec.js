import React from 'react'
import { render } from '@testing-library/react'

import AppBar from './AppBar'

const defaultProps = { children: '' }

describe('<AppBar />', () => {
  it('should render header', () => {
    const { container } = render(<AppBar {...defaultProps} />)
    const headerEl = container.firstChild

    expect(headerEl.tagName).toBe('HEADER')
  })

  it('should render children', () => {
    const { container } = render(<AppBar>A nice app bar</AppBar>)
    const headerEl = container.firstChild

    expect(headerEl).toHaveTextContent('A nice app bar')
  })

  it('should render fixed prop properly', () => {
    const { container, rerender } = render(<AppBar {...defaultProps} fixed />)
    const headerEl = container.firstChild

    expect(headerEl).toHaveStyleRule('position', 'fixed')

    rerender(<AppBar {...defaultProps} fixed={false} />)

    expect(headerEl).toHaveStyleRule('position', 'absolute')
  })

  it('should custom style', () => {
    const { container } = render((
      <AppBar
        {...defaultProps}
        style={{ backgroundColor: 'papayawhip' }}
      />
    ))
    const headerEl = container.firstChild

    expect(headerEl).toHaveAttribute('style', 'background-color: papayawhip;')
  })

  it('should render custom props', () => {
    const customProps = { title: 'cool-header' }
    const { container } = render(<AppBar {...defaultProps} {...customProps} />)
    const headerEl = container.firstChild

    expect(headerEl).toHaveAttribute('title', 'cool-header')
  })
})
