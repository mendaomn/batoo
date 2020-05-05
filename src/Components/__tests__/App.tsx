import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import App from '../App'

jest.mock('../../data/words.json', () => ({
  words: [{
    word: 'someword',
    taboos: ['sometaboo1', 'sometaboo2']
  }]
}))

test('should boot', () => {
  const { getByLabelText, getByText } = render(<App />)

  expect(getByText('someword')).toBeTruthy()
  expect(getByText('sometaboo1')).toBeTruthy()
  expect(getByText('sometaboo2')).toBeTruthy()
  
  expect(getByLabelText('scarta')).toBeTruthy()
  expect(getByLabelText('prossima')).toBeTruthy()

  fireEvent.click(getByLabelText('prossima'))

  expect(getByText(/1 su 1/i)).toBeTruthy()
  expect(getByLabelText('gioca ancora')).toBeTruthy()
  
  fireEvent.click(getByLabelText('gioca ancora'))

  expect(getByText('someword')).toBeTruthy()
})
