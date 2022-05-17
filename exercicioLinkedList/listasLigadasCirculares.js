const { CircularLinkedList } = PacktDataStructuresAlgorithms;


let cLL = new CircularLinkedList();
console.log("---------------Porcentagem de exp-------------------")
for (i=0; i<11; i++)
   cLL.push(10*i)
   console.log('Exp => ', cLL.toString());
   console.log("----------------------------------------------------")


console.log('Exp => ', cLL.toString());
console.log('Exp => ',cLL.removeAt(6));
console.log('Exp => ', cLL.toString());
//inserir elemento em uma posição específica
cLL.insert(20, 1);
console.log('Exp => ', cLL.toString());
//Remover o primeiro elemento passado no parâmetro
cLL.remove(20)
console.log('Exp => ', cLL.toString());
console.log(cLL.getElementAt( cLL.size( ) - 1 ) );
cLL.getIndexNextSortedElement()




