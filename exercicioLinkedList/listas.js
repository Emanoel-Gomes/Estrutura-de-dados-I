const { LinkedList } = PacktDataStructuresAlgorithms;

const listaDeBuffs = new LinkedList();

//Adicionar um elemento ao final da lista.
console.log("Evasão: 10");
listaDeBuffs.push(10);
console.log(`Evasão -> ${listaDeBuffs}.`);

//Retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
//Reorna 0 pois o elemento se encontra na primeira posição.
console.log('list.indexOf(10) => ', listaDeBuffs.indexOf(10));


console.log('Bloqueio: 30');
listaDeBuffs.push(30);
//verificar se o elemento 30 está na lista.
console.log(`Bloqueio -> ${listaDeBuffs.indexOf(30)}.`);

//Transforma a lista em uma string
console.log('lista em string => ', listaDeBuffs.toString());
//Retorna -1 pois o elemento 100 não foi encontrado na lista
console.log('defesa(100) => ', listaDeBuffs.indexOf(100));

//Adicionar mais um elemento ao final
console.log('Fúria: 100');
listaDeBuffs.push(100);
console.log('list.toString() => ', listaDeBuffs.toString());


console.log('Acelerar: 40');
console.log('Queimar: 35');
listaDeBuffs.push(40);
listaDeBuffs.push(35);

console.log('list.toString() => ', listaDeBuffs.toString());
console.log('Remover o 2 elemento => ', listaDeBuffs.removeAt(2));
console.log('list.toString() => ', listaDeBuffs.toString());
console.log('Remover o 1 elemento => ', listaDeBuffs.removeAt(1));
console.log('list.toString() => ', listaDeBuffs.toString());


console.log('inserir o elemento 20 na posição 0 => ', listaDeBuffs.insert(20, 0));
console.log('list.toString() => ', listaDeBuffs.toString());

console.log('inserir elemento 25 na posição list.size() => ', listaDeBuffs.insert(25, listaDeBuffs.size()));
console.log('list.toString() => ', listaDeBuffs.toString());
console.log('remover elemento 20 => ', listaDeBuffs.remove(20));
console.log('list.toString() => ', listaDeBuffs.toString());
console.log('Verificar se a lista está vazia => ',listaDeBuffs.isEmpty())
console.log('Tamanho da lista => ',listaDeBuffs.size())
console.log('Verificar o primeiro elemento(Head) => ',listaDeBuffs.getHead())

console.log('Limpar lista => ',listaDeBuffs.clear())
console.log('list.toString() => ', listaDeBuffs.toString());
console.log('Verificar se a lista está vazia => ',listaDeBuffs.isEmpty())
console.log('Tamanho da lista => ',listaDeBuffs.size())

