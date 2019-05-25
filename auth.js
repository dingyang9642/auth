/**
 * @file auth.js
 * @author dingyang
 */

// 按钮权限
const RECORD_ADD_BTN = 'record-add-btn';
const RECORD_UPDATE_BTN = 'record-update-btn';
const RECORD_DELETE_BTN = 'record-delete-btn';
// 模块权限
const CARD_MODULE = 'card-module';
// 页面权限
const A_PAGE = 'a-page';
const B_PAGE = 'b-page';
// 功能权限
const HTTP_USER_LIST = 'http-user-list';

// 权限相关操作
export default {
    // 后台返回对应用户的权限数据
    auths: [
        'record-add-btn',
        'record-update-btn',
        'record-delete-btn',
        'card-module',
        'a-page',
        'b-page',
        'http-user-list'
    ],

    /**
    * @description 判断权限数组是否位于权限集中
    * @param {Array} currentAuths 用来判读的权限
    * @return {Boolean} result 权限验证结果
    */
    isAuthEquals(currentAuths) {
        const auths = this.auths;
        for (let i = 0, len = currentAuths.length; i < len; i++) {
            if (!auths.includes(currentAuths[i])) {
                return false;
            }
        }
        return true;
    },

    /**
    * @description 判断权限数组是否存在位于个人权限list中的权限
    * @param {Array} currentAuths 用来判读的权限
    * @return {Boolean} result 权限验证结果
    */
    isAuthContains(currentAuths) {
        const auths = this.auths;
        for (let i = 0, len = currentAuths.length; i < len; i++) {
            if (auths.includes(currentAuths[i])) {
                return true;
            }
        }
        return false;
    },

    /**
    * @description 权限全等判断
    * @param {String | Array} auth 支持string or array 两种类型
    * @return {Boolean} result 权限验证结果
    */
    authEqual(auth) {
        const auths = this.auths;
        if (typeof auth !== 'string' && !(auth instanceof Array)) {
            console.error('authEqual: params type not corrent...');
            return false;
        }
        if (typeof auth === 'string') {
            return auths.includes(auth);
        }
        return this.isAuthEquals(auth);
    },

    /**
    * @description 权限包含判断
    * @param {Array} auth
    * @return {Boolean} result 权限验证结果
    */
    authContains(auth) {
        const auths = this.auths;
        if (!(auth instanceof Array)) {
            console.error('authContains: params-required array...');
            return false;
        }
        return this.isAuthContains(auth);
    },

    // 编辑按钮权限[必须同时具备‘update && delete’权限]
    getRecordEditAuth() {
        return this.authEqual([RECORD_UPDATE_BTN, RECORD_DELETE_BTN]);
    },

    // 编辑按钮权限[满足‘update || delete’权限之一]
    getRecordEditAuth2() {
        return this.authContains([RECORD_UPDATE_BTN, RECORD_DELETE_BTN]);
    },

    // 获取页面A访问权限
    getPageAAuth() {
        return this.authEqual(A_PAGE);
    },

    // other 其他权限
    getOtherAuth() {
        // return this.authEqual(A_PAGE); || this.authContains(A_PAGE);
    }
};
