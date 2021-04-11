module.exports = app => {
    const { router, controller } = app
    router.post('/login/:id', controller.user.login);
    router.post('/register', controller.user.register);
    router.post('/getProjInfo/:id', controller.user.getProjInfo);
    router.post('/selectLocation/:location', controller.user.selectLocation);
    router.post('/selectType/:type', controller.user.selectType);
    router.post('/getUserInfo/:id', controller.user.getUserInfo);
};