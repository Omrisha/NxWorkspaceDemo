import { screen, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

function mockFetch(data: any) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data
    })
  });
}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  })

  it('should render successfully', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const element = await screen.findByTestId('app-container');
    expect(element).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(await screen.findByText('Board Game Hoard')).toBeTruthy();
  });
});
