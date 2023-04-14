import { getItem } from '@/utils/storage'
import {variables,  MAIN_COLOR} from '@/constant'
import { generateColors } from '@/utils/theme'


const getters = {
    userInfo: state => state.user.userInfo,
    token: state => state.user.token,
    cssVar: state => {
        return {
            ...state.theme.variables,
            ...generateColors(getItem(MAIN_COLOR))
        }
    },
    sidebarOpened: state => state.app.sidebarOpened,
    mainColor: state => state.theme.mainColor
}

export default getters