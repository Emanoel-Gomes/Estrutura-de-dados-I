const { AVLTree } = PacktDataStructuresAlgorithms;

const avl2 = new AVLTree();

console.log("--- Classificação dos robôs ---")
avl2.insert(5);
avl2.insert(6);
avl2.insert(10);
avl2.insert(8);
avl2.insert(7);
avl2.insert(9);

console.log("Arvore da classificação")
console.log(avl2)

console.log("Nó raiz da classificação")
console.log(avl2.getRoot())

console.log("Altura máxima a partir do nó raiz")
console.log(avl2.getNodeHeight(avl2.getRoot()))

console.log("Fator de balanceamento")
console.log(avl2.getBalanceFactor(avl2.getRoot())) //nesse caso vai retornar 3 pois esta balanceada

console.log("procurar um valor específico na árvore")
console.log(avl2.search(5)) //true se existir e false se não existir

console.log("encontrar a menor classificação")
console.log(avl2.min()) //5

console.log("Encontrar a maior classificação")
console.log(avl2.max()) //10



