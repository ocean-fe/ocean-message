## ocean-message-plugins
### contributors：
### 黄攀 马恕


###  ***Intro: main-funcitons***
####  MsgRegister,  MsgUnregister,  MsgTrigger .
####  

```

import OceanMsg from '@ocean/message';

  /**
   * MsgRegister
   * 注册事件
   * @export
   * @param {string} eventName （参考格式：EVENT:NAME）
   * @param {func} callback
   */

OceanMsg.MsgRegister('EVENT:NAME', callback);

  /**
   * MsgTrigger
   * 触发事件
   * @export
   * @param {string} eventName
   * @param {any} data
   * @returns null
   */
OceanMsg.MsgTrigger('EVENT:NAME', data);

  /**
   * MsgUnregister
   * 撤销事件绑定
   * @export
   * @param {string} eventName
   * @param {func} callback
   */
OceanMsg.MsgUnregister('EVENT:NAME', callback); 

```
####   

