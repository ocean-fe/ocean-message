"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OceanMessage =
/*#__PURE__*/
function () {
  function OceanMessage() {
    _classCallCheck(this, OceanMessage);

    this.eventStack = {};
  }
  /**
   * MsgRegister
   * 注册事件
   * @export
   * @param {string} eventName
   * @param {func} callback
   */


  _createClass(OceanMessage, [{
    key: "MsgRegister",
    value: function MsgRegister(eventName, callback) {
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

  }, {
    key: "MsgUnregister",
    value: function MsgUnregister(eventName, callback) {
      if (!callback) {
        delete this.eventStack[eventName];
      } else if (this.eventStack[eventName]) {
        // 改动 map => filter
        this.eventStack[eventName] = this.eventStack[eventName].filter(function (_callback) {
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

  }, {
    key: "MsgTrigger",
    value: function MsgTrigger(eventName, data) {
      if (!this.eventStack[eventName]) {
        return null;
      }

      this.eventStack[eventName].map(function (callback) {
        return callback(data);
      });
    }
  }]);

  return OceanMessage;
}();

var OceanMessageInstance = null;

if (window.OceanMessage) {
  OceanMessageInstance = window.OceanMessage;
} else {
  OceanMessageInstance = new OceanMessage();
  window.OceanMessage = OceanMessageInstance;
}

var _default = {
  MsgRegister: OceanMessageInstance.MsgRegister.bind(OceanMessageInstance),
  MsgTrigger: OceanMessageInstance.MsgTrigger.bind(OceanMessageInstance),
  MsgUnregister: OceanMessageInstance.MsgUnregister.bind(OceanMessageInstance)
};
exports["default"] = _default;