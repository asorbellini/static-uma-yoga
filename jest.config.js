// Configuración de Jest para UMĀ Yoga Project
export default {
  // Entorno de testing
  testEnvironment: 'jsdom',
  
  // Archivos de setup
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  
  // Mapeo de módulos
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/__mocks__/fileMock.js'
  },
  
  // Transformaciones para JSX
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  
  // Configuración de Babel
  transformIgnorePatterns: [
    'node_modules/(?!(react|react-dom|react-router-dom)/)'
  ],
  
  // Archivos a incluir en coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
    '!src/serviceWorker.js',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}'
  ],
  
  // Umbrales de coverage
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  
  // Directorios de test
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}'
  ],
  
  // Directorios a ignorar
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/coverage/'
  ],
  
  // Archivos de mock
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  
  // Configuración de collectCoverage
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html'
  ],
  
  // Configuración de verbose
  verbose: true,
  
  // Configuración de bail
  bail: false
}
