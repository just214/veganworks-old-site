const fetch = require('isomorphic-fetch');

exports.handler = function(event, context, callback) {
  console.log('Event', event.body);
  const url = 'https://us19.api.mailchimp.com/3.0/lists/4ac3305432/members';
  fetch(url, {
    method: 'POST',
    // withCredentials: true,
    // credentials: 'include',
    headers: {
      Authorization: '1ca0fc792e860f5f0632492d1b38bef5-us19',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: event.body,
      status: 'subscribed',
    }),
  })
    .then(function(data) {
      callback(null, {
        statusCode: data.status,
        body: data.status === 200 ? 'Success' : data.statusText,
      });
    })
    .catch(function(error) {
      callback(null, {
        statusCode: data.status,
        body: data.statusText,
      });
    });
};
