var Service = require('node-windows').Service;

var svc = new Service({
  name:'Download Segregator',
  description: 'Segregates downloads into respective folders.',
  script: '<path-to-download-segregator>\\dist\\index.js',
});

svc.on('install',function(){
  svc.start();
});

svc.install();
