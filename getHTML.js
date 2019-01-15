var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function printHTML(html) {
  console.log(html);
}

function getHTML(options, callback) {

  var dataPrint = [];

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (chunk) {
      dataPrint += chunk;
      console.log(chunk.length);
      console.log('show me stuff:', dataPrint);
    });

    response.on('end', function () {
      callback(dataPrint);
    });

  });

}
getHTML(requestOptions, printHTML);
