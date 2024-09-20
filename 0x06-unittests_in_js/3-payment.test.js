const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using the calculateNumber method from Utils', () => {
    const wrapper = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(wrapper.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(wrapper.calculateNumber.callCount).to.be.equal(1);
    wrapper.calculateNumber.restore();
  });
});
