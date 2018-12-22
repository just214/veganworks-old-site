exports.handler = function(event, context, callback) {
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: 'keyzGgOdWawCB8eHv' }).base(
    'appGRQwm7dT9KfxIP',
  );

  base('Snack Boxes')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 1000,
      view: 'Website',
      filterByFormula: 'NOT({isLive} = "")',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        let newRecords = [];

        records.forEach(function(record) {
          let newRecord = {
            name: record.get('Name'),
            price: record.get('Price'),
            salePrice: record.get('Sale Price'),
            image: record.get('Image')[0].thumbnails.large.url,
            availability: record.get('Availability'),
            tags: record.get('Tags'),
            link: record.get('Link'),
          };
          newRecords.push(newRecord);
        });

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(newRecords),
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      },
    );
};
