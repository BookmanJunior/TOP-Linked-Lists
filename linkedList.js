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

  return {
    append,
    prepend,
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
console.log(newLinkedList.head);
console.log(newLinkedList.tail);
