import React from 'react'
import { Input, Button, List } from 'antd'
import './TodoList.css'

// 无状态组件

const TodoListUI = (props) => {
  return (
    <div className="todolist-wrapper">
      <div className="input-wrapper">
        <Input
          value={props.inputValue}
          placeholder="随便写点东西吧"
          onChange={props.inputChange}
          onPressEnter={props.saveItem}
          style={{width: 250, marginRight: 10}}
        />
        <Button type="primary"
          onClick={props.saveItem}
          style={{width: 60}}
        >
          新增
        </Button>
      </div>
      <div>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
              <List.Item
                // 这里的 index 不需要再次传入了，再次传入 index  相当于重新声明一个 index 
                onClick={() => {props.delItem(index)}}
                // key={'item'+index}
              >
                {item}
              </List.Item>
          )}
          style={{width: 320, margin: 10}}
        >
        </List>
      </div>
    </div>
  )
}
 
export default TodoListUI;