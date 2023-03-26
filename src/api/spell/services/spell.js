'use strict';

/**
 * spell service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spell.spell');
