function getPaymentTokenFromAPI(success) {
    new Promise((resolve, _) => {
        if (success) {
        resolve({data: 'Successful response from the API'});
        }
    });
}
  
  module.exports = getPaymentTokenFromAPI;
