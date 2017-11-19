var ObservableObject = (function() {
  
  var argument = 0;
  
  var observers = [];
  
  var subscribe = function(func) {
    observers.push(func);
  }
  
  var unsubscribe = function(func) {
    observers.indexOf(func) !== -1 &&
      observers.splice(observers.indexOf(func), 1); 
  }
  
  var notify = function() {
    observers.forEach(function(func) {
      func(argument);
    });
  }
  
  var setArgument = function(newArg) {
    argument = newArg;
    notify();
  }
  
  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    setArgument: setArgument
  }
})()
