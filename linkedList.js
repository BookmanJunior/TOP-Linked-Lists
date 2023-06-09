const LinkedList = () => {
  let linkedList = {};
  let head;
  let tail;
  let size = 0;

  const append = (value) => {
    // set next value to null
    if (!head) {
      createFirstNode(value);
      return;
    }
    traverse(linkedList, value);
    size += 1;
  };

  const prepend = (value) => {
    // set next value to null
    if (!head) {
      createFirstNode(value);
      return;
    }
    linkedList = node(value, linkedList);
    head = node(value);
    size += 1;
  };

  const at = (index) => getValue(linkedList, index);

  const contains = (value) => doesValueExist(linkedList, value);

  function traverse(list, value) {
    if (!list.next) {
      list.next = node(value);
      tail = node(value);
      return;
    }
    traverse(list.next, value);
  }

  function createFirstNode(value) {
    linkedList = node(value);
    head = node(value);
    size += 1;
  }

  function getValue(list, index, i = 1) {
    if (index > size) {
      return `Value at index ${index} doesn't exist`;
    }
    if (index === i) {
      return list;
    }
    i += 1;
    return getValue(list.next, index, i);
  }

  function doesValueExist(list, value) {
    if (list.value === value) {
      return true;
    }

    if (list.next) {
      return doesValueExist(list.next, value);
    }

    return false;
  }

  // function removeLastNode(list) {
  //   if (list.next) {
  //   }
  // }

  return {
    append,
    prepend,
    at,
    contains,
    get list() {
      return linkedList;
    },
    get head() {
      return head;
    },
    get tail() {
      return tail;
    },
    get size() {
      return size;
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
console.log(newLinkedList.size);
// console.log(newLinkedList.head);
// console.log(newLinkedList.tail);
console.log(newLinkedList.at(3));
console.log(newLinkedList.contains());
