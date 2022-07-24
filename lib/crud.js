'use strict';

module.exports = (init) => {
  const iface = {};
  const { entities } = init;
  for (const [entity, data] of Object.entries(entities)) {
    iface['schema' + entity] = (context) => async () => ({
      context,
      data,
    });
  }
  return iface;
};
