(function() {

  navigator.serviceWorker.register('worker.js').then(function(reg) {
    console.log('success', reg);
  }, function(err) {
    console.log('fail', err);
  });

}());
