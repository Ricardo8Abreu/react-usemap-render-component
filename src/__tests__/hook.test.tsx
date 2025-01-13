import React from 'react'

import { render } from '@testing-library/react'

import useMap from '../index'

interface dataTestObject {
  id?: string | number
  name: string
}

describe('useMap hook', () => {

  test('should render array of objects correctly', () => {
    const data: dataTestObject[] = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' }
    ]

    const TestComponent = ({ name }: { name: string }) => <div>{name}</div>

    const TestCase = () => {
      const items = useMap({ 
        data, 
        Component: TestComponent,
        config: { key: 'id' }
      })

      return <>{items}</>
    }

    const { container } = render(<TestCase />)
    expect(container).toHaveTextContent('Test 1')
    expect(container).toHaveTextContent('Test 2')
  })

  test('should render array of strings correctly', () => {
    const data = ['Item 1', 'Item 2']

    const TestComponent = ({ children }: { children: string }) => <div>{children}</div>

    const TestCase = () => {
      const items = useMap({
        data,
        Component: TestComponent,
        config: { key: 'item' }
      })

      return <>{items}</>
    }

    const { container } = render(<TestCase />)
    expect(container).toHaveTextContent('Item 1')
    expect(container).toHaveTextContent('Item 2')
  })
})
