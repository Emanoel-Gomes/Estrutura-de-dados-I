const { Dictionary } = PacktDataStructuresAlgorithms;

const dictionary = new Dictionary();
//Criação de dicionários
dictionary.set('Kyle', 'warrior');
dictionary.set('Sabre', 'assassin');
dictionary.set('Metal', 'Tank');
dictionary.set('Tron', 'Support');

console.log(dictionary.hasKey('Metal')); // true
console.log(dictionary.size()); // 4

console.log(dictionary.keys()); // ["Kyle", "Sabre", "Metal", "Tron"]
console.log(dictionary.values()); // ["Warrior", "Assassin", "Tank", "Support"]
console.log(dictionary.get('Sabre')); // Assassin

dictionary.remove('Metal');
console.log(dictionary.size()); // 3

console.log(dictionary.keys()); // ["Kyle", "Sabre", "Tron"]
console.log(dictionary.values()); // ["Warrior", "Assassin", "Support"]

console.log(dictionary.keyValues()); // [{key: "Kyle", value: "Warrior"}, {key: "Sabre", value: "Assassin"}, {key: "Tron", value: "Support"}]
console.log(dictionary.toString()); // [#Kyle: Warrior],[#Sabre: Assassin],[#Tron: Support]

dictionary.forEach((k, v) => { //Para cada chave/valor
  console.log('forEach: ', `key: ${k}, value: ${v}`);
});
//forEach:  key: Kyle, value: warrior
//forEach:  key: Sabre, value: assassin
//forEach:  key: Tron, value: Support
console.log(dictionary.clear()); //Limpar dicionário
console.log(dictionary.toString());
