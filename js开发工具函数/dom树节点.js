// 递归生成树形结构
export function getTreeData(data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
  let arr = [];

  for (let i = 0; i < data.length; i++) {
      if (data[i][pidName] == pid) {
          data[i].key = data[i][idName];
          data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
          arr.push(data[i]);
      }
  }

  return arr;
}

// 遍历树节点
export function foreachTree(data, childrenName = 'children', callback) {
  for (let i = 0; i < data.length; i++) {
      callback(data[i]);
      if (data[i][childrenName] && data[i][childrenName].length > 0) {
          foreachTree(data[i][childrenName], childrenName, callback);
      }
  }
}

// 追溯父节点
export function traceParentNode(pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
      if (node[idName] == pid) {
          arr.push(node);
          if (node[pidName] != rootPid) {
              arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
          }
      }
  });
  return arr; 
}

// 寻找所有子节点
export function traceChildNode(id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
      if (node[pidName] == id) {
          arr.push(node);
          arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
      }
  });
  return arr;
}


