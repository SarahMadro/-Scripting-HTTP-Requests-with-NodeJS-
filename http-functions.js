module.exports = function getHTML(options, callback) {

  var https = require('https');

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
};

// getHTML(requestOptions, printHTML);