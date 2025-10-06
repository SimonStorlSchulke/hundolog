'use strict';

/**
 * hund service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hund.hund');
