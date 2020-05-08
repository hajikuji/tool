// 简易处理
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 复杂处理
function deepClone(obj) {
  function isClass(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  }
  var result;
  var oClass = isClass(obj);
  if (oClass === "Object") {
    result = {};
  } else if (oClass === "Array") {
    result = [];
  } else {
    return obj;
  }
  for (var key in obj) {
    var copy = obj[key];
    if (isClass(copy) == "Object") {
      result[key] = arguments.callee(copy);//递归调用 
    } else if (isClass(copy) == "Array") {
      result[key] = arguments.callee(copy);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}