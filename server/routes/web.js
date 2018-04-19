var webhooker = require('gitlab-webhooker');
 
webhooker.init({
  token: 'qwerty123', // Optional. Default: ''. Secret key 
  port: 4400, // Optional. Default: 4400. Listen port 
  branches: ['master', 'dev'], // Optional. Default '*'. Branches for track 
  events: ['push', 'merge_request'], // Optional. Default: 'push'. Event list for track 
  onEvent: function() { /* some js */ }, // Optional. Default: null. Call before exec command 
  command: 'cd ~/myapp; ./deploy.sh', // Optional. Shell command when triggered 
  
  exit: true // Optional. Default: false. process.exit(0) after complete command (if you use Docker) 
});