function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
      const hash = args.join(','); 
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache !== undefined) { 
          console.log("Из кэша: " + objectInCache.result); 
          return "Из кэша: " + objectInCache.result;
      } else if (!objectInCache) {
          let result = func.call(this, ...args); 
          cache.push({hash, result}) ; 
            if (cache.length > 5) { 
             cache.shift();
            }
          console.log("Вычисляем: " + result);
          return "Вычисляем: " + result; 
      } 
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerId;
  let  firstCall = true;
  function wrapper (...args) { 
    if (firstCall !== true) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
      func.call(this, ...args);
      console.timeEnd("time2");
      }, ms);
      return timerId;
    } else if (firstCall = true) {
      timerId = func.call(this, ...args);
      firstCall = false;
      console.timeEnd("time1");
      return firstCall;
    }
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timerId;
  let  firstCall = true;
  function wrapper (...args) {  
    if (firstCall !== true) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
      func.call(this, ...args); 
      }, ms);
      this.count += 1;
    } else if (firstCall = true) {
      timerId = func.call(this, ...args);
      firstCall = false;
      this.count = 1;
    }
  }
  return wrapper;
}