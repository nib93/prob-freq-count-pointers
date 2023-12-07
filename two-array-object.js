// add whatever parameters you deem necessary
function twoArrayObject(key,value) {
    return key.reduce((i, curr, id) => {
        i[curr] = id < value.length ? value[id] : null;
        return i;
      }, {});
}
