'use strict';

const crud = (init) => {
  const iface = {};
  const { entities } = init;
  for (const [entity, data] of Object.entries(entities)) {
    iface['schema' + entity] = async () => data;
  }
  return iface;
};

module.exports = { plugins: { crud } };
