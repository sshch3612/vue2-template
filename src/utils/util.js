/**
 *  树形结构 根据子项 查找 父级路径
 */
function findIndexArray(data, conditionkey, querykey, value, queue) {
    if (!Array.isArray(data)) throw new Error("数据结构解析出错");
    const arr = Array.from(queue);
    for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        arr.push(item[querykey]);
        if (item[conditionkey] === value) {
            return arr;
        }
        let children = item.children;
        if (children && children.length) {
            const result = findIndexArray(children, conditionkey, querykey, value, arr);
            if (result) {
                return result;
            }

        }
        arr.pop();
    }
    return false;
}

export {
    findIndexArray
};