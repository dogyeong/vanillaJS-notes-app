const Event = function () {
  this.listeners = [];
};

Event.prototype.addListener = function (listener) {
  this.listeners.push(listener);
};

Event.prototype.trigger = function (...params) {
  this.listeners.forEach((listener) => listener(...params));
};

export default Event;
