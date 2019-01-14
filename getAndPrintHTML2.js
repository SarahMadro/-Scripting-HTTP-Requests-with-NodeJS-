var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTMLChunks(options) {

  var dataPrint = [];

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      dataPrint += chunk;
      console.log(chunk.length);
      console.log('show me stuff:', dataPrint);
    });

    response.on('end', function () {
      console.log('response stream complete');
    });

  });

}
getAndPrintHTMLChunks(requestOptions);