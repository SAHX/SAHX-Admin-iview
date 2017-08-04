/**
 * Created by tangjiang on 2017/8/1.
 */
import * as types from './mutation-types'

export const saveUserInfo = ({commit}, userInfo) => {
    commit(types.SAVE_USER_INFO, userInfo)
};

