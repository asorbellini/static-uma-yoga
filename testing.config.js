// Configuración de testing para UMĀ Yoga Project
export default {
  // Configuración de Jest
  jest: {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapping: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js'
    },
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/**/*.d.ts',
      '!src/index.js',
      '!src/serviceWorker.js'
    ],
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70
      }
    }
  },
  
  // Configuración de Testing Library
  testingLibrary: {
    queries: ['getByRole', 'getByLabelText', 'getByPlaceholderText', 'getByText'],
    fireEvent: true,
    userEvent: true
  },
  
  // Configuración de Playwright (E2E)
  playwright: {
    browsers: ['chromium', 'firefox', 'webkit'],
    viewport: [
      { width: 1280, height: 720 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 }
    ],
    testDir: 'tests/e2e',
    use: {
      baseURL: 'http://localhost:5173',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure'
    }
  },
  
  // Configuración de Lighthouse CI
  lighthouse: {
    ci: {
      collect: {
        url: ['http://localhost:5173'],
        numberOfRuns: 3
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', { minScore: 0.8 }],
          'categories:accessibility': ['error', { minScore: 0.9 }],
          'categories:best-practices': ['warn', { minScore: 0.8 }],
          'categories:seo': ['warn', { minScore: 0.8 }]
        }
      }
    }
  }
}
