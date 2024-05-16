import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';

import App from '../App';
import mock from './mock';

beforeEach(() => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (mock),
  });
});

afterEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});

describe('Testa a página Profile', async () => {
  it('Testa se entrar direto na rota /profile sem token volta para a página principal', async () => {
    renderWithRouter(<App />, { route: '/profile' });

    expect(screen.getByText(/b2b/i)).toBeInTheDocument();
  });
  it('Testa os textos da página profile', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });

    const emailInput = screen.getByLabelText(/E-mail/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const button = screen.getByRole('button', { name: /Sing In/i });

    await user.type(emailInput, 'cliente@youdrive.com');
    await user.type(passwordInput, 'password');
    await user.click(button);

    const profilePictureName = await screen.findByText(/Profile picture/i);
    const profileImg = await screen.findByAltText(/rosto de um usuário/i);
    const profileName = await screen.findByText(/Name/i);
    const profileEmail = await screen.findByText(/E-mail/i);

    expect(profilePictureName).toBeInTheDocument();
    expect(profileImg).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(profileEmail).toBeInTheDocument();
  });
});
