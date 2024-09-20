const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with arguments', () => {
    const wrapper = sinon.spy(console);
    const temp = sinon.stub(Utils, 'calculateNumber');

    temp.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(temp.calledWith('SUM', 100, 20)).to.be.true;
    expect(temp.callCount).to.be.equal(1);
    expect(wrapper.log.calledWith('The total is: 10')).to.be.true;
    expect(wrapper.log.callCount).to.be.equal(1);
    temp.restore();
    wrapper.log.restore();
  });
});
