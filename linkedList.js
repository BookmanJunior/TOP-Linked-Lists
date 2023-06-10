import Node from "./node.js";

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
    linkedList = Node(value, linkedList);
    head = Node(value);
    size += 1;
  };

  const at = (index) => getValue(linkedList, index);

  const contains = (value) => doesValueExist(linkedList, value);

  const find = (value) => getIndex(linkedList, value);

  const toString = (list = linkedList) => {
    console.log(list.value);

    if (!list.next) {
      console.log(list.next);
      return;
    }

    toString(list.next);
  };

  const pop = () => {
    removeNode(linkedList);
  };

  function createFirstNode(value) {
    linkedList = Node(value);
    head = Node(value);
    size += 1;
  }

  function traverse(list, value) {
    if (!list.next) {
      list.next = Node(value);
      tail = Node(value);
      return;
    }
    traverse(list.next, value);
  }

  function getValue(list, index, i = 0) {
    if (index > size) {
      return `Value at index ${index} doesn't exist`;
    }
    if (index === i) {
      return list;
    }
    i += 1;
    return getValue(list.next, index, i);
  }

  function removeNode(list, prev = null) {
    if (!list.next) {
      prev.next = null;
      return;
    }
    prev = list;
    removeNode(list.next, prev);
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

  function getIndex(list, value, index = 0) {
    if (list.value === value) {
      return index;
    }

    if (list.next) {
      index += 1;
      return getIndex(list.next, value, index);
    }

    return null;
  }

  return {
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
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

export default LinkedList;
