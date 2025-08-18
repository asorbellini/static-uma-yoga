import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

// Wrapper para Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  test('renders header with navigation', () => {
    renderWithRouter(<Header />);
    
    // Verificar que el header esté presente
    expect(screen.getByRole('banner')).toBeInTheDocument();
    
    // Verificar que la navegación esté presente
    const navElements = screen.getAllByRole('navigation');
    expect(navElements.length).toBeGreaterThan(0);
  });

  test('renders navigation items', () => {
    renderWithRouter(<Header />);
    
    // Verificar elementos de navegación
    const homeElements = screen.getAllByText('Home');
    const chiSiamoElements = screen.getAllByText('Chi siamo');
    const retreatElements = screen.getAllByText('Retreat e workshop');
    
    expect(homeElements.length).toBeGreaterThan(0);
    expect(chiSiamoElements.length).toBeGreaterThan(0);
    expect(retreatElements.length).toBeGreaterThan(0);
  });

  test('mobile menu button has proper accessibility attributes', () => {
    renderWithRouter(<Header />);
    
    const mobileButton = screen.getByRole('button', { name: /apri il menu/i });
    expect(mobileButton).toHaveAttribute('aria-label');
    expect(mobileButton).toHaveAttribute('aria-expanded');
    expect(mobileButton).toHaveAttribute('aria-controls');
  });
});
