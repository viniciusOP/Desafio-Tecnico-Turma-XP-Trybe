const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const AtivoModel = require('../../models/ativoModel');

describe('AtivoModel test', function () {
  describe('getById test', function () {
      before(function () {
          sinon.stub(connection, 'execute').resolves([[]]);
      });
      after(function () {
          connection.execute.restore();
      });
      it('deverá retornar um array', async function () {
          const response = await AtivoModel.getById(1);
          expect(response).to.be.an('array');
      });
  });
});