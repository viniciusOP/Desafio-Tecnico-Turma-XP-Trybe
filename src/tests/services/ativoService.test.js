const { expect } = require('chai');
const sinon = require('sinon');
const AtivoModel = require('../../models/ativoModel');
const AtivoService = require('../../services/ativoService');

describe('AtivoService test', function () {
  describe('getById test', function () {
      before(function () {
          sinon.stub(AtivoModel, 'getById').resolves([{}]);
      });
      after(function () {
          AtivoModel.getById.restore();
      });
      it('deverá retornar um array', async function () {
          const response = await AtivoService.getById(1);
          expect(response).to.be.an('array');
      });
  });
});