const LinkedList = () => {
  let list = {};
  const append = (value) => {};
  const prepend = (value) => {
    if (!Object.keys(list).length) {
      list = node(value);
      return;
    }
    list = node(value, list);
  };

  return {
    append,
    prepend,
    get list() {
      return list;
    },
  };
};

function node(value = null, next = null) {
  return {
    value,
    next,
  };
}

// testing
const newNode = LinkedList();
newNode.prepend(0);
newNode.prepend(1);
console.log(newNode.list);
