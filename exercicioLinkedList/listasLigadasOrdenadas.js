const { SortedLinkedList } = PacktDataStructuresAlgorithms;
const { util } = PacktDataStructuresAlgorithms;

const nivel = new SortedLinkedList();


for (let i = 10; i > 0; i--) {
  nivel.push(i);
}
//Ordena a lista
console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1 => ', nivel.toString());
//Remover o elemento no índice 9 //10
console.log('nivel.removeAt(9) => ', nivel.removeAt(9));
//Remover o elemento 9
console.log('remove element 9 => ', nivel.remove(9));
//console.log('nivel.removeAt(10) => ', nivel.removeAt(9)); //undefined

console.log('nivel.toString() => ', nivel.toString());

// ------- Criar uma classe com 2 parametros

class Partes {
  constructor(parte1, parte2) {
    this.parte1 = parte1;
    this.parte2 = parte2;
  }
  toString() {
    return `${this.parte1.toString()}|${this.parte2.toString()}`;
  }
}

function partesCompare(a, b) {
  return a.toString().localeCompare(b.toString());
}

const parts = new SortedLinkedList(util.defaultEquals, partesCompare);

console.log('SortedLinkedList personalizada');

parts.push(new Partes(3, 4));
console.log('push Partes(3, 4)');
console.log('nivel.toString() => ', parts.toString());

parts.push(new Partes(1, 2));
console.log('push Partes(1, 2)');
console.log('nivel.toString() => ', parts.toString());

parts.push(new Partes(5, 6));
console.log('push Partes(5, 6)');
console.log('nivel.toString() => ', parts.toString());

parts.insert(new Partes(0, 0), 4);
console.log('insert Partes(0, 0) pos 4 (pos ignored)');
console.log('nivel.toString() => ', parts.toString());
