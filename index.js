const addon = require('./build/Release/addon');

const func1 = () => {
  addon.hello();
}

module.exports = {func1};
