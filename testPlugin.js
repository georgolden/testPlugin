'use strict';

const crud = (init) => {
  const iface = {};
  const { entities, model } = init;
  for (const entity of entities) {
    iface['schema' + entity] = async () => model.entities.get(entity);
  }
};

module.exports = { plugins: { crud } };
