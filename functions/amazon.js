exports.handler = function(event, context, callback) {
  var amazonMws = require('amazon-mws')(
    'AKIAJ4UUJNZHOUEZBNCQ',
    'QOi4TYCv9Nb9tUITgR2EnMJQ+6Tidnw7JS7hsfqx',
  );

  amazonMws.orders.search(
    {
      Version: '2013-09-01',
      Action: 'ListOrders',
      SellerId: 'A9S736R0GNQLU',
      // MWSAuthToken: '821772729664',
      'MarketplaceId.Id.1': 'ATVPDKIKX0DER',
      CreatedAfter: new Date('2018-10-05T00:00:00Z'),
    },
    function(error, response) {
      if (error) {
        console.log('error ', error);
        return;
      }
      console.log(response.Orders);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.Orders),
      });
    },
  );
};
