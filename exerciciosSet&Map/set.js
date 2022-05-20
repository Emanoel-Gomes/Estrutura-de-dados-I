const set = new Set();
for (i=1; i<6; i++)
  set.add(i*10);
console.log(set.values()); // Iterator
console.log(set.has(10)); // true
console.log(set.size); // 5

set.add(2);
console.log(set.values()); // [10, 20, 30, 2]
console.log(set.has(2)); // true
console.log(set.size); // 4

set.delete(10);
console.log(set.values()); // [20, 30, 2]

set.delete(2);
console.log(set.values()); // [20, 30]
set.clear() //Limpar
console.log(set.values()); //set vazio

const conjuntoA = new Set();
conjuntoA.add(10);
conjuntoA.add(20);
conjuntoA.add(30);

const conjuntoB = new Set();
conjuntoB.add(20);
conjuntoB.add(30);
conjuntoB.add(40);

// --------- Union ----------
const union = (set1, set2) => {
  const unionAb = new Set();
  set1.forEach(value => unionAb.add(value));
  set2.forEach(value => unionAb.add(value));
  return unionAb;
};
console.log(union(conjuntoA, conjuntoB)); // {1, 2, 3, 4}

console.log(new Set([...conjuntoA, ...conjuntoB])); // {1, 2, 3, 4}

// --------- Intersection ----------
const intersection = (set1, set2) => {
  const intersectionSet = new Set();
  set1.forEach(value => {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};
console.log(intersection(conjuntoA, conjuntoB)); // {2, 3}

console.log(new Set([...conjuntoA].filter(x => conjuntoB.has(x)))); // {2, 3}

// alternative - works on FF only
// console.log(new Set([x for (x of setA) if (setB.has(x))]));

// --------- Difference ----------
const difference = (set1, set2) => {
  const differenceSet = new Set();
  set1.forEach(value => {
    if (!set2.has(value)) {
      differenceSet.add(value);
    }
  });
  return differenceSet;
};
console.log(difference(conjuntoA, conjuntoB)); //{ 1}
console.log(new Set([...conjuntoA].filter(x => !conjuntoB.has(x)))); // {1}

