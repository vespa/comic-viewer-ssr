import express from 'express';
import path from 'path';
import routes from './routes';
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
import webPackConf from '../webpack.config.dev';
const compiler = webpack(webPackConf);
const app = express();

// set static folder for generated css and front js files
app.use('/public', express.static(path.join(__dirname, 'public')));

// set routes
app.use('/', routes);

// app.use(middleware(compiler, {
//     // webpack-dev-middleware options
// }));

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/

// error handler
/*app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});*/

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
