import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/app';
import Template from '../views/template';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
/* eslint-disable */
  const appTemplate = renderToString(<Template title={'hi'}><App /></Template>);
  res.send(appTemplate);
});

module.exports = router;
