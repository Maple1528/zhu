const { Controller } = require('egg');
class UserController extends Controller {
    async login() {
        const { ctx } = this;
        const id = ctx.params.id;
        // const { password } = ctx.request.body;
        const result = await ctx.service.user.login(id);
        ctx.body = result
    }

    async register() {
        const { ctx } = this;
        // const id = ctx.params.id;
        // const password = ctx.params.password;
        const { id, password } = ctx.request.body;
        const result = await ctx.service.user.register(id, password);
        ctx.body = result
    }

    async getProjInfo() {
        const { ctx } = this;
        const id = ctx.params.id;
        // const { id } = ctx.request.body;
        const result = await ctx.service.user.getProjInfo(id);
        ctx.body = result
    }

    async selectLocation() {
        const { ctx } = this;
        const location = ctx.params.location;
        // const { location } = ctx.request.body;
        const result = await ctx.service.user.selectLocation(location);
        ctx.body = result
    }

    async selectType() {
        const { ctx } = this;
        // const type = ctx.params.location;
        const { type } = ctx.request.body;
        const result = await ctx.service.user.selectType(type);
        ctx.body = result
    }

    async getUserInfo() {
        const { ctx } = this;
        const id = ctx.params.id;
        // const { id } = ctx.request.body;
        const result = await ctx.service.user.getUserInfo(id);
        ctx.body = result
    }
}

module.exports = UserController;