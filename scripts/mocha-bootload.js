require('babel/register')({optional: [
  'es7.decorators',
  'es7.objectRestSpread']
  });
  
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
