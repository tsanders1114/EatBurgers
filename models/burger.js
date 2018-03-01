var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      })
    },
    update:function(id,cd){
      orm.update('burgers',id,cd);
    },
    create: function(name,cb){
      orm.create('burgers', name, cb);
    }
}
module.exports = burger;
