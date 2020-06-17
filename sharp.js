const { expose } = require('threads');

const sharp = require('sharp');

expose({
  test: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
});
