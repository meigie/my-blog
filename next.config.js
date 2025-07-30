const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        postgres_username: 'meigie',
        postgres_port: '5432',
        postgres_database: 'blog1',
      },
    };
  }
  return {
    env: {
      postgres_username: 'meigie',
      postgres_port: '5432',
      postgres_database: 'blog',
    },
  };
};
