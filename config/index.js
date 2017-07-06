var configVal = require('./config');

module.exports = {
    getDbConnectionString : function(){
        return `mongodb://localhost:27017/nodetodo`
    }
}