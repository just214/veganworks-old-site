exports.handler = function(event, context, callback) {
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: 'keyzGgOdWawCB8eHv' }).base(
    'appGRQwm7dT9KfxIP',
  );

  base('Bundles')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 1000,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(records),
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
