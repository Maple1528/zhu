exports.keys = "something";
exports.static = {
    prefix: '/'
};

exports.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'Maple1528',
      // 数据库名
      database: 'zhu',
    }
};
  
exports.security = {
    csrf: {
        enable: false
    }
}