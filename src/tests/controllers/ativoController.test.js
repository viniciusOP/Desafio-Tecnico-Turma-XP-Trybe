const { expect } = require('chai');
const sinon = require('sinon');
const AtivoController = require('../../controllers/ativoController');
const AtivoService = require('../../services/ativoService');

const res = {};
const req = {};

describe('AtivoController test', function () {
    describe('getById test', function () {
        const mock = [[{}]];
        before(function () {
          sinon.stub(AtivoService, 'getById').resolves(mock);
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          req.params = 1;
        });
   
        after(function () { return AtivoService.getById.restore(); });
       
        it('deverá retornar status 200', async function () {
          await AtivoController.getById(req, res);
          expect(res.status.calledWith(200)).to.be.equal(true);
        });
   
        it('deverá retornar um aray com um objeto', async function () {
          await AtivoController.getById(req, res);
          expect(res.json.calledWith([{}])).to.be.equal(true);
        });
  
        it('NÃO retornar status 404', async function () {
          await AtivoController.getById(req, res);
          expect(res.status.calledWith(404)).to.be.equal(false);
        });
    });
});