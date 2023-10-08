<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer B: ReferenceError: greetign is not defined</b></summary>
<p>

#### Answer: 

<p>
Here greeting is defined but greetign is not defined. So their will be an ReferenceError. Which is "greetign" is not defined
</p>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer C: "12"</b></summary>


#### Answer: 
<p>
"+" it oparates like add two numbers or concatinate as string. Here one number and one string are concatinating. When their is at least one string with multiple numbers it always concatinates not adding. 
</p>

</>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer A: ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: 
<p>
Here, food is an array of incons. We know that array in non primitive so info.favoriteFood = "🍝"; can't be changed like this.
</p>


</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer B: Hi there, undefined</b></summary>
<p>

#### Answer: ?

<p>
Inside the function name is defined but never been set value by function perameter. In other words sayHi() has name argument but in the sayHi() function calling their is no perameter is given. 
</p>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer C: 3</b></summary>
<p>

#### Answer: ?

<p>
forEach loop is itarating the nums array. In the body of this forEach loop their is a if statement where it checks num (index) but the first index is the zero that's why for the first intaretion count will not get with one. but second, third and fourth intaretion will add 1 to count then the final result will be 3. 
</p>

</p>
</details>
