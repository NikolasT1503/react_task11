import {ACTION_CHANGE_FAM, ACTION_CHANGE_IM, ACTION_CHANGE_OT} from './MainStore';

export const changeFam = (fam) => ({type: ACTION_CHANGE_FAM, payload: fam})
export const changeIm = (im) => ({type: ACTION_CHANGE_IM, payload: im})
export const changeOt = (ot) => ({type: ACTION_CHANGE_OT, payload: ot})