var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'Twitter',
  consumer_secret: 'API',
  access_token_key: 'keys',
  access_token_secret: 'go here'
});

twit
  .verifyCredentials(function (err, data) {
    if (err) {
      console.log("Error verifying credentials: " + err);
      process.exit(1);
    }
  })
  .updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
    function (err, data) {
      if (err) console.log('Tweeting failed: ' + err);
      else console.log('Success!')
    }
  );