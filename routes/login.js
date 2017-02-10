var express = require('express');
var router = express.Router();


/* GET login page. */
router.route("/").get(function(req,res){// 到达此路径则渲染login文件，并传出title值供 login.html使用
  res.render("login",{title:'User Login'});
}).post(function(req,res){// 从此路径检测到post方式则进行post数据的处理操作
  //这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
  //var User = global.dbHandel.getModel('user');
  var pg = require('pg');
  var conString = "postgres://username:password@localhost/database";
  pg.connect(conString, function(err, client, done) {

    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::int AS number', ['1'], function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].number);
    });

  });


  res.send(JSON.stringify({ type:type }));
  res.end();
});
module.exports = router;
