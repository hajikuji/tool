/**
 *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
 *  @param { * } link 生成树形结构的依据
 */
export const createTree = (items, id = null, link = 'pid') =>{
  items.filter(item => item[link] === id).map(item => ({ ...item, children: createTree(items, item.id) }));
};
