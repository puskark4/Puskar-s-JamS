
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['6Xh9dpmxdvwHGGMUTXf56a'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  