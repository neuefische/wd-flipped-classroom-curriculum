# Mock Interview 2 - ✨Unlock Your Next Job with Practice ✨

## Learning objectives

- Get ready to ace technical interviews
- Sharpen your problem-solving and coding skills
- Boost your confidence in interviews
- Overcome challenges when feeling stuck or experiencing a mental block during an interview
- Understand that one problem could have multiple solutions

> 💡 It might be beneficial for the coach to ask for a volunteer candidate a day before the session.

---

## Disclaimer: If you'd rather not read, you can watch a recorded session in action [here](https://drive.google.com/file/d/1JNTLsmzPZf6v8HimD9i8E-9ybfZBTR8p/view?usp=sharing) while enjoying your favorite coffee ☕🎦

- If interested here is also a [workshop](https://drive.google.com/drive/u/0/folders/1-KEnNk7anbmOHaYiSONRa4vRZYindxuq) on technical interviews we conducted earlier.

> 💰 Interviewing is the most
> profitable skill you can learn! 💰

> ✨3 mock interviews make you 6x more likely to get hired! ✨

> Making mistakes during a real interview can be costly and may result in losing the position you're applying for. However, in a mock interview, mistakes are not only welcome but also provide valuable learning opportunities. Embrace the chance to make plenty of mistakes now, as they will help you and others learn and avoid them in real interviews. So, get ready to embrace the mock interview and make mistakes, because the more mistakes you make now, the fewer you'll make in a real interview!

### Requirements

- Interview Session 1

## Session Guide

This session focuses on solving a real interview problem faced by another student to help you build confidence and improve your foundational coding skills. This is essential for securing the students first software engineering position. A friendly senior software engineer will conduct a mock interview and provide personalized feedback to enhance the students performance.

>  What should you do if you feel stuck or experience a mental block during an interview?

### Introduction
In today's session, we are conducting a mock interview where you play the role of the interviewer and one of the students plays the role of the candidate. Remember, since this is their first interview ever, they may be shy and nervous. Encourage them and make them feel comfortable with making mistakes. Additionally, give the candidate the opportunity to introduce themselves briefly and share their professional background.

Here are some rules to help everyone engage:

- The candidate can raise their hand at any point during the interview and request to switch back to the classroom setup to ask questions.
- Others can also raise their hand and request to switch when they have questions.
- Before the interview begins, be sure to request remote control (using the zoom feature) so that you can step in and help correct any typos. This will not only reduce their nervousness, but also ensure a seamless interview experience.
- Feel free to utilize this [extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) that enables you to run code with just a click of a button, eliminating the need for terminal work and allowing the student to solely focus on the code and problem at hand.

### The Problem 🚨

Let's look at the following problem at [leetCode].

```js
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  // TODO: return indices of the two numbers that add up to target
}
```

> Please note that the guidance provided here is intended for on-demand assistance. However, during the interview, it is important to refrain from providing excessive guidance and instead focus on creating an interactive and engaging environment. (feel free to refer to the recorded session [here]((https://drive.google.com/file/d/1JNTLsmzPZf6v8HimD9i8E-9ybfZBTR8p/view?usp=sharing)))

We need to write a function that returns the indices of two numbers in the array nums that add up to the target. 🧠

### Step 1: Understanding the Problem 💡

- Discuss the importance of thoroughly understanding the problem before attempting to solve it.

- Emphasize identifying inputs and outputs. "What does the function get, what does it return?"
  *Input*: An array of integers nums and an integer target.
  *Output*: Indices of two numbers in nums that sum up to target.
   *Assumption*: Each input has exactly one solution, and you can't use the same element twice.

- This step is also the time to ask clarifying questions in case the problem is not clear

- When talking about code and coming up with a solution we need to be very exact in our language when we say "the function gets numbers" we are not exact enough. It should be "it gets an array of numbers or integers."

### Step 2: Coming up with a solution in plain language 📝

Ask students if they have any ideas of how to solve the above problem with code.

### Approach 1: Brute Force (Less Optimal) 🐢
1. Iterate through each element in the array.

2. For each element, iterate again through the array to check if any other element (besides itself) adds up to the target.

3. If a pair is found, return their indices.

```js
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  // iterate over the array
  // for each element, check if there's another element that adds up to the target
  // if the sum of nums[i] and nums[j] equals the target
  // return their indices
}
```

## Approach 2: Optimized with a Hash Map 🚀
1. Iterate through the array.

2. For each element, calculate the complement (target - currentElement).
Check if this complement is already in a hash map.

3. If found, return the indices of the complement and the current element.

4. If not found, store the current element and its index in the hash map.

It could look like this:

```js
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  // create an empty object to store the complements
  // iterate over the array of nums
  // check if the complement exists in the map
  // return the indices of the two numbers
  // store the index of the current number in the map
}
```

### Section 3: Implementation 🛠️

- Guide the candidate to replace each comment one by one with JavaScript statements.
- Consistently ask the candidate, "What is the next small step we need to implement?"
- Instruct the candidate to replace the comment with the appropriate code snippet. 
- Ensure that the candidate tests each line of code. For instance, when implementing the logic for iterating over the loop, have them add a` console.log()` statement to log every element within the array.

#### Approach 1: Brute Force (Less Optimal) 🐢
```js
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  // iterate over the array
  for (let i = 0; i < nums.length; i++) {
    // for each element, check if there's another element that adds up to the target
    for (let j = i + 1; j < nums.length; j++) {
      // if the sum of nums[i] and nums[j] equals the target
      if (nums[i] + nums[j] === target) {
        // return their indices
        return [i, j];
      }
    }
  }
}
```

#### Approach 2: Optimized with a Hash Map 🚀
```js
const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
  // create an empty object to store the complements
  let map = {};

  // iterate over the array of nums
  for (let i = 0; i < nums.length; i++) {
    // calculate the complement
    let complement = target - nums[i];

    // check if the complement exists in the map
    if (complement in map) {
      // return the indices of the two numbers
      return [map[complement], i];
    }

    // store the index of the current number in the map
    map[nums[i]] = i;
  }
}
```

### Testing 🧪
- Test the function with different cases to ensure it works for all inputs. You can do that by using the custom test cases option or by simplty running the code in leetcode. 

- Compare the performance of the brute-force and optimized solutions to understand why the hash map approach is better for larger arrays.

**Note**: 📝 When using this guide, you don't have to implement both approaches. Instead, choose the approach based on the student's level, and only briefly mention the other one. Both approaches should be included in the Demo link shared by coach.

**Also**: 💬 Students are allowed to utilize ChatGPT for assistance but should avoid using it to cheat or simply copy answers. The goal is to learn and understand the concepts. Motivate them to do so! not sure how to do it exactly? Feel free to to check this [guide](../self-directed-learning-3/chatgpt-pair-programming.md).

---

#### Recap the approach to solve problems

1. **Understand the Problem:**

   - Read carefully, identify inputs and outputs, and ask clarifying questions.

2. **Plan Your Approach:**

   - Divide and conquer, use plain language and / or pseudocode.

3. **Execute Your Plan:**

   - Translate to code, test as you go, and debug issues.

4. **Review and Refine:**

   - Optimize your solution, seek feedback, and reflect on the process.

5. **Practice Regularly:**
   - Improve your skills through regular practice and learning from different solutions

This approach should be practiced constantly with the students. At the beginning always discuss the task with the students. Make sure the problem is understood. Be very strict about using exact language when coming up with the steps to solve the problem (written as comments in the function body) and about using the correct technical terms when discussing the code.
For the first few times come up with the steps in plain English together with the students. At some point though they should be able to come up with a solution themselves.

---


[leetCode]: https://leetcode.com/problems/two-sum/description/