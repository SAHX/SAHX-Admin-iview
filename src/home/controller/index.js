'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        let userLogined = await this.session('userLogined');
        if(think.isEmpty(userLogined)){
            return this.redirect('/index/login')
        }
        return this.display();
    }

    loginAction() {
        let msg = '';
        if(this.get('error') === '1'){
            msg = '帐号或密码错误，请重新输入！'
        }
        this.assign({
            msg:msg
        });
        return this.display();
    }

    async dologinAction() {
        let username = this.post('username');
        let password = this.post('password');
        if(username === 'admin' && password === '123456'){
            await this.session('userLogined',1);
            return this.redirect('/')
        }
        return this.redirect('/index/login?error=1')
    }
    async logoutAction() {
        await this.session();
        return this.redirect('/')
    }
}