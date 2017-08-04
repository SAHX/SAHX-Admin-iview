/**
 * Created by tangjiang on 2017/8/1.
 */
import * as types from '../mutation-types'

const state = {
    userInfo: undefined //用户基本信息
};

const mutations = {
    [types.SAVE_USER_INFO] (state, userInfo) {
        state.userInfo = userInfo
    }
};

export default {
    state,
    mutations
}
