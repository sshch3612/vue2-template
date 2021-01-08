/**
 *  树形结构 根据子项 查找 父级路径
 * 
 */
function findIndexArray(data, key, value, queue) {
    if (!Array.isArray(data)) throw new Error("数据结构解析出错");
    const arr = Array.from(queue);
    for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        arr.push(item[key]);
        if (item[key] === value) {
            return arr;
        }
        let children = item.children;
        if (children && children.length) {
            const result = findIndexArray(children, key, value, arr);
            if (result) {
                return result;
            }

        }
        arr.pop();
    }
    return false;
}