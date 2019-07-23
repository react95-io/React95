import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { renderWithTheme, theme } from '../../../test/utils'
import { blockSizes } from '../common/system'
import { createDisabledTextStyles } from '../common'

import Button from './Button'

const defaultProps = {
  children: 'click me'
}

describe('<Button />', () => {
  it('should render button', () => {
    const { getByRole } = render(<Button {...defaultProps} />)
    const button = getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  it('should handle different types', () => {
    const { getByRole } = render(<Button {...defaultProps} type='submit' />)
    const button = getByRole('button')

    expect(button).toHaveAttribute('type', 'submit')
  })

  it('should handle click properly', () => {
    const onButtonClick = jest.fn()
    const { getByRole } = render(<Button {...defaultProps} onClick={onButtonClick} />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(onButtonClick).toHaveBeenCalled()
  })

  it('should handle disabled for all variants', () => {
    const { getByRole, rerender } = renderWithTheme(<Button {...defaultProps} disabled />)
    const button = getByRole('button')
    const disabledTextShadow = `1px 1px ${theme.textDisabledShadow}`

    expect(button).toHaveStyleRule('color', theme.textDisabled)
    expect(button).toHaveStyleRule('text-shadow', disabledTextShadow)

    rerender(<Button {...defaultProps} variant='menu' />)
    expect(button).toHaveStyleRule('color', theme.textDisabled)
    expect(button).toHaveStyleRule('text-shadow', disabledTextShadow)

    rerender(<Button {...defaultProps} variant='flat' />)
    expect(button).toHaveStyleRule('color', theme.textDisabled)
    expect(button).toHaveStyleRule('text-shadow', disabledTextShadow)
  })

  it('should handle fullWidth prop', () => {
    const { getByRole, rerender } = render(<Button {...defaultProps} fullWidth />)
    const button = getByRole('button')

    expect(button).toHaveStyleRule('width', '100%')

    rerender(<Button {...defaultProps} fullWidth={false} />)

    expect(button).toHaveStyleRule('width', 'auto')
  })

  it('should handle button sizes properly', () => {
    const { getByRole, rerender } = render(<Button {...defaultProps} size='sm' />)
    const button = getByRole('button')

    expect(button).toHaveStyleRule('height', blockSizes.sm)

    rerender(<Button {...defaultProps} size='lg' />)

    expect(button).toHaveStyleRule('height', blockSizes.lg)
  })

  it('should handle square prop', () => {
    const { getByRole } = render(<Button {...defaultProps} square size='md' />)
    const button = getByRole('button')

    expect(button).toHaveStyleRule('padding', '0')
    expect(button).toHaveStyleRule('width', blockSizes.md)
  })

  it('should render children', () => {
    const { getByRole } = render(<Button {...defaultProps} />)
    const button = getByRole('button')

    expect(button.innerHTML).toBe('click me')
  })

  it('should not fire click when disabled', () => {
    const onButtonClick = jest.fn()
    const { getByRole } = render(<Button {...defaultProps} disabled />)
    const button = getByRole('button')

    fireEvent.click(button)

    expect(onButtonClick).not.toHaveBeenCalled()
  })
})
