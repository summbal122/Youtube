class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache {
  constructor(limit = 10) {
    this.limit = limit;
    this.map = new Map(); 
    this.head = null;
    this.tail = null;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return null;

    // Move to front (most recently used)
    this._remove(node);
    this._addToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }

    const node = new Node(key, value);
    this._addToFront(node);
    this.map.set(key, node);

    if (this.map.size > this.limit) {
      // Remove LRU
      this.map.delete(this.tail.key);
      this._remove(this.tail);
    }
  }

  toObject() {
    const obj = {};
    let current = this.head;
    while (current) {
      obj[current.key] = current.value;
      current = current.next;
    }
    return obj;
  }

  _addToFront(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head) this.head.prev = node;
    this.head = node;

    if (!this.tail) this.tail = node;
  }

  _remove(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;

    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;
  }
}
