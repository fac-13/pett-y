const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('app up and runnnnnnning', app.get('port'));
});
