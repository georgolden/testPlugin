/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
'use strict';

const crud = (init) => () => {
  const iface = {};
  const { entities } = init;
  for (const [entity, data] of Object.entries(entities)) {
    iface['schema' + entity] = async () => ({ context, data });
  }
  return iface;
};

module.exports = { plugins: { crud } };
