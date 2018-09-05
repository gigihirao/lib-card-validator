const cardValidator = require('../index');
const chai = require('chai');
const mocha = require('mocha');
const expect = chai.expect;


describe('cardValidator()', () => {
  describe("#cardValidator", () => {
      it('Deve retornar vazio quando o tamanho for 0', () => {
          expect(() => cardValidator(0)).to.throw(TypeError);
      })
      it('Deve for inserido somente um dígito', () => {
          expect(() => cardValidator(1)).to.throw(TypeError);
      })
      it('Quando for inserido uma string', () => {
          expect(() => cardValidator('')).to.throw(Error);
      })
      it('Quando o número do cartão for válido', () => {
          expect(cardValidator(4402955352166921)).to.be.true;
      })
      it('Quando o número do cartão dor inválido', () => {
          expect(cardValidator(1234352637482749)).to.be.false;
      })
  });
});