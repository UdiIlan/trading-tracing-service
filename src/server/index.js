import createError from 'http-errors';
import express from 'express';
import indexRouter from './routes';
import usersRouter from './routes/users';
import requestRouter from './routes/requests';

const server = express();


server.use(express.json());

server.use('/', indexRouter);
server.use('/users', usersRouter);
server.use('/requests', requestRouter);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
    next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.server.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default server;