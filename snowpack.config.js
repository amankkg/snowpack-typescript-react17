/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: '/dist',
  },
  devOptions: {
    open: 'none',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    ['@snowpack/plugin-babel', {input: ['.tsx']}],
  ],
  packageOptions: {
    knownEntrypoints: ['react/jsx-runtime'],
  },
}
