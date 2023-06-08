const LinkedList = () => {
  let linkedList = {};

  const append = (value) => {
    if (!Object.keys(linkedList).length) {
      linkedList = node(value);
      return;
    }
    traverse(linkedList, value);
  };

  const prepend = (value) => {
    if (!Object.keys(linkedList).length) {
      linkedList = node(value);
      return;
    }
    linkedList = node(value, linkedList);
  };

  function traverse(list, value) {
    if (!list.next) {
      list.next = node(value);
      return;
    }
    traverse(list.next, value);
  }

  return {
    append,
    prepend,
    get list() {
      return linkedList;
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
const newLinkedList = LinkedList();
newLinkedList.prepend(1);
newLinkedList.prepend(0);
newLinkedList.append(5);
newLinkedList.append(8);
console.log(newLinkedList.list);
