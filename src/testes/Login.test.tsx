import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';

import App from '../App';

describe('Testa a página de Login', () => {
  it('Testa os textos da página de Login', async () => {
    renderWithRouter(<App />);

    expect(screen.getByText(/b2b/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sing In/i)).toBeInTheDocument();
  });

  it('Testa se o usuário é redirecionado para a página de Profile', async () => {
    const { user } = renderWithRouter(<App />, { route: '/' });

    const emailInput = screen.getByLabelText(/E-mail/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const button = screen.getByRole('button', { name: /Sing In/i });

    await user.type(emailInput, 'cliente@youdrive.com');
    await user.type(passwordInput, 'password');
    await user.click(button);

    const profileName = await screen.findByText(/Profile picture/i);
    expect(profileName).toBeInTheDocument();
  });
});
