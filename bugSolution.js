function foo(a, b) {
  // Use nullish coalescing operator to provide default values if a or b is null
  const aValue = a ?? 0; // If a is null or undefined, use 0 otherwise use a
  const bValue = b ?? 0; // If b is null or undefined, use 0 otherwise use b
  return aValue + bValue; 
}

console.log(foo(1, null)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, 2)); // 3
console.log(foo(null, null)); // 0