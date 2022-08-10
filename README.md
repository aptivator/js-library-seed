# js-library-seed

### Introduction

This repository is a basic scaffold for writing isomorphic JavaScript libraries.
The setup provides a test-driven and command-line environment to track real-time
results of development and a build script to assemble a library for distribution.

### Usage

Clone the repository to use it as the base for a new library:

```
git clone git@github.com:aptivator/js-library-seed.git <some-library-name>
```

The following commands are implemented in `package.json`:

* `npm run build` - assembles source code into a `UMD` and `module` distributables
* `npm run dev` - watches `src` and `test` directories for changes and runs test files
(`*.test.js`) in `test` directory.
* `npm run dev:coverage` - runs `npm run dev` with code coverage
* `npm run test` - executes test cases one time
* `npm run test:coverage` - invokes `npm run test` with code coverage

### Publishing a Package

1. Run `npm run build`
2. Go to `dist` directory
3. Run `npm publish`
   * distributable `package.json` is automatically generated
   * for private packages, `.npmrc` will need to be created (in `dist` folder)
     with an appropriate path to a private packages repository

### Tools Used

* [Babel](https://babeljs.io/) - ESNext transpiler
* [Rollup](https://rollupjs.org/guide/en) - source code bundler
* [Mocha](https://mochajs.org/) - test declaration framework
* [Chai](https://www.chaijs.com/) - test assertions library
* [Istanbul](https://istanbul.js.org/) - code coverage tool

### Caveats

This scaffolding repository is basic.  For example, when creating libraries
with external dependencies, `rollup.config.js` will need to include `external`
and `globals` declarations.  Other configurations may be needed depending on
the specifics of the developed library.
