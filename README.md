# @ocean/message

<!-- [Site](https://alpha.bkjk-inc.com/ocean/framework/OceanMessage) -->

## Introduction

message可以订阅、发布消息，实现组件之间的通信

## Installation

Using npm:
```shell
$ npm i @ocean/message
```
Using yarn:
```shell
$ yarn add @ocean/message
```
## API
```javaScript
 /**
   * MsgRegister
   * 注册事件
   * @export
   * @param {string} eventName （参考格式：EVENT:NAME）
   * @param {func} callback
   * @return null
   */

message.MsgRegister('EVENT:NAME', callback);

  /**
   * MsgTrigger
   * 触发事件
   * @export
   * @param {string} eventName
   * @param {any} data
   * @return null
   */
message.MsgTrigger('EVENT:NAME', data);

  /**
   * MsgUnregister
   * 撤销事件绑定
   * @export
   * @param {string} eventName
   * @param {func} callback
   * @return null
   */
message.MsgUnregister('EVENT:NAME', callback); 
```

## Example

```javaScript
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import message from '@ocean/message';
const OceanMessageDemo = () => {
const [messageText, setMessageText] = useState(null);
const onMessage = () => {
 setMessageText('这是一段触发message消息事件生成的文本');
};
useEffect(()=>{
message.MsgRegister('TRIGGER', onMessage);
// 为避免造成内存泄漏，必须return message的注销方法
return () => {
message.MsgUnregister('TRIGGER');
}
});
const sendMessage = () => {
message.MsgTrigger('TRIGGER')
};
return (
<div>
<div>{messageText}</div>
<Button type='primary' onClick={ sendMessage }>调用message</Button>
</div>
)
}
export default OceanMessageDemo;
```

## Support

Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.

## Contributors

© 2019 powered by 贝壳金服房产前端团队

## License

This software is free to use under the Apache License [Apache license](https://raw.githubusercontent.com/BETA-FE-TEAM/ocean-message/master/LICENSE).

