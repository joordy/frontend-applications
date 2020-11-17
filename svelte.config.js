const preprocess = require('svelte-preprocess')
module.exports = {
  preprocess: preprocess({
    typescript: false,
    scss: true,
  }),
}
