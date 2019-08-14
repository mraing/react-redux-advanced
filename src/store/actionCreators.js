import { INPUT_CHANGE, SAVE_ITEM, DEL_ITEM } from './actionType'

// 监听数据
export const inputChangeAction = (value) => ({
  type: INPUT_CHANGE,
  value
})
// 保存数据
export const saveItemAction = () => ({
  type: SAVE_ITEM
})
// 删除数据
export const delItemAction = (value) => ({
  type: DEL_ITEM,
  value
})