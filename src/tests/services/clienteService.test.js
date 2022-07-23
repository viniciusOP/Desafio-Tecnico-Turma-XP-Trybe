const { expect } = require('chai');
const sinon = require('sinon');
const ClienteModel = require('../../models/clienteModel');
const ClienteService = require('../../services/clienteService');

describe('ClienteService test', function () {
    describe('getById test', function () {
        before(function () {
            sinon.stub(ClienteModel, 'getById').resolves([{}]);
        });
        after(function () {
            ClienteModel.getById.restore();
        });
        it('deverá retornar um array', async function () {
            const response = await ClienteService.getById(1);
            expect(response).to.be.an('array');
        });
    });
});