
function Counter() {
  return {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
}

// ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
  Alpine.data('counter', Counter);
});
  
const counter1 = Counter();
const counter2 = Counter();
const counter3 = Counter();

counter1.increment();
counter1.increment();
counter1.increment();

counter2.increment();
counter2.increment();

// prints 3 
console.log(counter1.count);

//prints 2
console.log(counter2.count);
alert(counter2.count)


