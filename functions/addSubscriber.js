exports.handler = function(event, context, callback) {
  const url = 'https://us19.api.mailchimp.com/3.0/lists/4ac3305432/members';
  fetch(url, {
    method: 'POST',
    withCredentials: true,
    credentials: 'include',
    headers: {
      Authorization: '1ca0fc792e860f5f0632492d1b38bef5-us19',
      'Content-Type': 'application/json',
    },
    body: event.body,
  })
    .then(function(data) {
      console.log('Request success: ', data);
    })
    .catch(function(error) {
      console.log('Request failure: ', error);
    });
};
