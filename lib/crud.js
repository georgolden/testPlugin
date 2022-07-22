/* eslint-disable no-loop-func */
'use strict';

module.exports = (init) => (context) => {
  const iface = {};
  const { entities } = init;
  for (const [entity, data] of Object.entries(entities)) {
    iface['schema' + entity] = async () => ({ context, data });
  }
  return iface;
};
