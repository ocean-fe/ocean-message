class OceanMessage {
  constructor() {
    this.eventStack = {};
  }
  /**
   * MsgRegister
   * 注册事件
   * @export
   * @param {string} eventName
   * @param {func} callback
   */
  MsgRegister(eventName, callback) {
    if (!this.eventStack[eventName]) {
      this.eventStack[eventName] = [];
    }
    this.eventStack[eventName].push(callback);
  }

  /**
   * MsgUnregister
   * 撤销事件绑定
   * @export
   * @param {string} eventName
   * @param {func} callback
   */
  MsgUnregister(eventName, callback) {
    if (!callback) {
      delete this.eventStack[eventName];
    } else if (this.eventStack[eventName]) {
      // 改动 map => filter
      this.eventStack[eventName] = this.eventStack[eventName].filter((_callback) => {
        return _callback !== callback;
      });
      if (this.eventStack[eventName].length === 0) {
        delete this.eventStack[eventName];
      }
    }
  }

  /**
   * MsgTrigger
   * 触发事件
   * @export
   * @param {string} eventName
   * @returns null
   */
  MsgTrigger(eventName, data) {
    if (!this.eventStack[eventName]) {
      return null;
    }
    this.eventStack[eventName].map((callback) => {
      return callback(data);
    });
  }
}

let OceanMessageInstance = null;

if (window.OceanMessage) {
  OceanMessageInstance = window.OceanMessage;
} else {
  OceanMessageInstance = new OceanMessage();
  window.OceanMessage = OceanMessageInstance;
}

export default {
  MsgRegister: OceanMessageInstance.MsgRegister.bind(OceanMessageInstance),
  MsgTrigger: OceanMessageInstance.MsgTrigger.bind(OceanMessageInstance),
  MsgUnregister: OceanMessageInstance.MsgUnregister.bind(OceanMessageInstance)
};
