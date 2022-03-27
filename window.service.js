var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Download Segregator',
  description: 'Segregates downloads into respective folders.',
  script: 'M:\\Rishi\\Projects\\personal\\utils\\download-segregator\\dist\\index.js',
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();