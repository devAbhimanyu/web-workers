module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '\\.(css|scss|sass)$': '<rootDir>/node_modules/identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/index.js',
    '<rootDir>/src/components/index.js',
    'fileTransformer.js',
  ],
};
