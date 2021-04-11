const { Service } = require('egg');
class UserService extends Service {
    async login(id) {
        const result = await this.app.mysql.select('user', {
            where: {
                id: id,
            }
        });
        if (result.length > 0) return {
            code: 1,
            result
        };
        else return {
            code: -1,
            result
        };
    }

    async register(id, password) {
        const find = await this.app.mysql.select('user', {
            where: {
                id: id,
            }
        });
        if (find.length > 0) {
            return {
                code: -1,
                message: '注册失败,用户已存在',
                find
            }
        } else {
            let result = await this.app.mysql.insert('user', { id: id, password: password })
            return {
                code: 1,
                message: '注册成功',
                result
            }
        };
    }
    
    async getProjInfo(id) {
        const result = await this.app.mysql.select('project', {
            where: {
                id: id,
            }
        });
        if (result.length > 0) return {
            code: 1,
            result
        };
        else return {
            code: -1,
            message: '没有该项目'
        };
    }

    async selectLocation(location) {
        let sql = `SELECT * FROM project WHERE location like '${location}%'`
        const result = await this.app.mysql.query(sql);
        if (result.length > 0) return {
            code: 1,
            result
        };
        else return {
            code: -1,
            message: '无结果'
        };
    }

    async selectType(type) {
        const result = await this.app.mysql.select('project', {
            where: {
                type: type,
            }
        });
        if (result.length > 0) return {
            code: 1,
            result
        };
        else return {
            code: -1,
            message: '无结果'
        };
    }

    async getUserInfo() {
        const result = await this.app.mysql.select('user', {
            where: {
                id: id,
            }
        });
        if (result.length > 0) return {
            code: 1,
            result
        };
        else return {
            code: -1,
            message: '没有该用户'
        };
    }
}
module.exports = UserService;