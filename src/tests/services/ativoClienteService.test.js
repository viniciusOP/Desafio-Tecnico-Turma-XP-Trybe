const { expect } = require('chai');
const sinon = require('sinon');
const AtivoClienteModel = require('../../models/ativoClienteModel');
const AtivoClienteService = require('../../services/ativoService');

describe('AtivoClienteService test', function () {
  describe('getById test', function () {
      before(function () {
          sinon.stub(AtivoClienteModel, 'getById').resolves([{}]);
      });
      after(function () {
          AtivoClienteModel.getById.restore();
      });
      it('deverá retornar um array', async function () {
          const response = await AtivoClienteService.getById(1);
          expect(response).to.be.an('array');
      });
  });
});