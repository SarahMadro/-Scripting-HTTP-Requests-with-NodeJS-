var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks() {
  var dataPrint = [];
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      console.log(chunk.length);
    });

    // response.on('end', function(){
    //   console.log('response stream complete');
    // });

  });

}
getAndPrintHTMLChunks();