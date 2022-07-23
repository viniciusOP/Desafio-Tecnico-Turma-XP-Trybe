const { expect } = require('chai');
const sinon = require('sinon');
const AtivoClienteController = require('../../controllers/ativoClienteController');
const AtivoClienteService = require('../../services/ativoClienteService');

const res = {};
const req = {};

describe('AtivoClienteController test', function () {
    describe('getById test', function () {
        const mock = [[{}]];
        before(function () {
          sinon.stub(AtivoClienteService, 'getById').resolves(mock);
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          req.params = 1;
        });
   
        after(function () { return AtivoClienteService.getById.restore(); });
       
        it('deverá retornar status 200', async function () {
          await AtivoClienteController.getById(req, res);
          expect(res.status.calledWith(200)).to.be.equal(true);
        });
   
        it('deverá retornar um aray com um objeto', async function () {
          await AtivoClienteController.getById(req, res);
          expect(res.json.calledWith([{}])).to.be.equal(true);
        });
  
        it('NÃO retornar status 404', async function () {
          await AtivoClienteController.getById(req, res);
          expect(res.status.calledWith(404)).to.be.equal(false);
        });
    });
});