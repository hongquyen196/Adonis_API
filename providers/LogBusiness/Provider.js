const { ServiceProvider } = require('@adonisjs/fold');

class LogBusinessProvider extends ServiceProvider {
    register() {
        this.app.singleton('App/Provider/LogBusiness', () => {
            return new (require('.'))();
        })
    }
}

module.exports = LogBusinessProvider;