const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../models/connection');
const ClienteModel = require('../../models/clienteModel');

describe('ClienteModel test', function () {
  describe('getById test', function () {
      before(function () {
          sinon.stub(connection, 'execute').resolves([[]]);
      });
      after(function () {
          connection.execute.restore();
      });
      it('deverá retornar um array', async function () {
          const response = await ClienteModel.getById(1);
          expect(response).to.be.an('array');
      });
  });
});