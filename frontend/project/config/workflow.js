module.exports = (config) => {
  config.development.open = '/';

  config.development.hotLoader = {
    enabled: true,
    experimental: true,
  };
  config.app.title = 'Space X | Rockets';

  config.ekko.enabled = false;

  return config;
};
