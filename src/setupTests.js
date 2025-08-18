// Setup para tests de UMĀ Yoga Project
import '@testing-library/jest-dom';

// Mock de IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock de ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock de matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock de scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

// Mock de requestAnimationFrame
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Mock de getComputedStyle
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
  }),
});

// Mock de localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock de sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;

// Mock de fetch
global.fetch = jest.fn();

// Mock de console methods en tests
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  // Suprimir warnings de React en tests
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: componentWillReceiveProps has been renamed')
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});

// Configuración global de testing
global.testUtils = {
  // Helper para esperar que un elemento esté en el DOM
  waitForElement: (selector, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
          resolve(element);
          return;
        }
        
        if (Date.now() - startTime > timeout) {
          reject(new Error(`Elemento ${selector} no encontrado en ${timeout}ms`));
          return;
        }
        
        requestAnimationFrame(checkElement);
      };
      
      checkElement();
    });
  },
  
  // Helper para simular scroll
  simulateScroll: (scrollY) => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: scrollY,
    });
    window.dispatchEvent(new Event('scroll'));
  },
  
  // Helper para simular resize
  simulateResize: (width, height) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: width,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      value: height,
    });
    window.dispatchEvent(new Event('resize'));
  },
  
  // Helper para simular click
  simulateClick: (element) => {
    element.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    }));
  },
  
  // Helper para simular cambio de ruta
  simulateRouteChange: (pathname) => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        ...window.location,
        pathname,
      },
    });
    window.dispatchEvent(new PopStateEvent('popstate'));
  },
};

// Configuración de testing-library
import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 5000,
  getElementError: (message, container) => {
    const error = new Error(message);
    error.name = 'TestingLibraryElementError';
    return error;
  },
});

// Configuración de jest-dom
import '@testing-library/jest-dom';
