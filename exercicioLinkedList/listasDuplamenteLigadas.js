const { DoublyLinkedList } = PacktDataStructuresAlgorithms;

const list = new DoublyLinkedList();
for (i=5; i>0; i--)
  list.insert((10*i),0)
  console.log(list)

console.log(list.inverseToString())

