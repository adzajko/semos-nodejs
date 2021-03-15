const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../api-docs.json');

/**
 * Middlewares for serving Swagger UI Docs, based on a JSON or YAML file 
 */
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

module.exports = router;
