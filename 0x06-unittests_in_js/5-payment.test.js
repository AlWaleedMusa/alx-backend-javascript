const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let wrapper;

  beforeEach(() => {
    if (!wrapper) {
      wrapper = sinon.spy(console);
    }
  });

  afterEach(() => {
    wrapper.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) log "The total is: 120" to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(wrapper.log.calledWith('The total is: 120')).to.be.true;
    expect(wrapper.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) log "The total is: 20" to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(wrapper.log.calledWith('The total is: 20')).to.be.true;
    expect(wrapper.log.calledOnce).to.be.true;
  });
});
