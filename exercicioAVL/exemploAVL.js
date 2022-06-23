const { AVLTree } = PacktDataStructuresAlgorithms;

const avl = new AVLTree();

console.log("--- Classificação dos robôs ---")
avl.insert(5);
avl.insert(6);
avl.insert(10);
avl.insert(8);
avl.insert(7);


console.log("Arvore da classificação")
console.log(avl)

console.log("Nó raiz da classificação")
console.log(avl.getRoot())

console.log("Altura máxima a partir do nó raiz")
console.log(avl.getNodeHeight(avl.getRoot()))

console.log("Fator de balanceamento")
console.log(avl.getBalanceFactor(avl.getRoot())) //nesse caso vai retornar 2 pois esta levemente desbalanceada a direita

console.log("procurar um valor específico na árvore")
console.log(avl.search(5)) //true se existir e false se não existir

console.log("encontrar a menor classificação")
console.log(avl.min()) //5

console.log("Encontrar a maior classificação")
console.log(avl.max()) //10

