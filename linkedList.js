const LinkedList = () => {
  let linkedList = {};

  const append = (value) => {
    // set next value to null
    if (isObjectEmpty()) {
      linkedList = node(value);
      return;
    }
    traverse(linkedList, value);
  };

  const prepend = (value) => {
    // set next value to null
    if (isObjectEmpty()) {
      linkedList = node(value);
      return;
    }
    linkedList = node(value, linkedList);
  };

  const size = () => {
    if (isObjectEmpty()) {
      return 0;
    }

    let sum = 1;
    while (linkedList.next) {
      linkedList = linkedList.next;
      sum += 1;
    }
    return sum;
  };

  function traverse(list, value) {
    if (!list.next) {
      list.next = node(value);
      return;
    }
    traverse(list.next, value);
  }

  function isObjectEmpty() {
    return !Object.keys(linkedList).length;
  }

  return {
    append,
    prepend,
    size,
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
console.log(newLinkedList.size());
