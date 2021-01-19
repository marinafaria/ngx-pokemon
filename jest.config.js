module.exports = {​​​​
    roots: ['<rootDir>/src'],
    transform: {​​​​
      '^.+\\.(ts|js|html)$': 'ts-jest',
    }​​​​,
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    collectCoverageFrom: [
      "src/app/**/*.ts",
      "!src/app/**/*.module.ts",
      "!src/app/**/*.array.ts",
      "!src/app/**/*.model.ts",
      "!src/app/**/*.enum.ts",
      "!src/app/fragmentTypes.ts"
    ],
    modulePaths: ['<rootDir>/dist'],
    transformIgnorePatterns: ['node_modules/(?!@ngrx|@ngx-utils)'],
    snapshotSerializers: [
      'jest-preset-angular/build/AngularSnapshotSerializer.js',
      'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
    setupFilesAfterEnv: [
      "./node_modules/@angular-builders/jest/dist/jest-config/setup.js",
      "./setupJest.ts"
    ],
  }​​​​;