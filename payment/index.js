
  chrome.storage.local.get(['co2InKg'], function(result) {
  var cost=(0.075*(result.co2InKg)).toFixed(2);
  paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
      sandbox: 'AcTkjH53vCT0clNhnPQMagrdpdrysJxaEfkhIutehR-iyWrwb2Pf7py7a9g8_e3B0j1M5uH_5ab7y6xc',
      production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_IE',
    style: {
      size: 'small',
      color: 'gold',
      shape: 'rect',
      label: 'paypal'
    },
    

    // Enable Pay Now checkout flow (optional)
    commit: true,

    // Set up a payment
    payment: function(data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: cost,
            currency: 'EUR'
          }
        }]
      });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
      return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        window.alert('Thank you for your purchase!');
        return actions.order.capture().then(function(details){
              console.log(details);
        });
      });
    }
  }, '#paypal-button');

});
  
      
