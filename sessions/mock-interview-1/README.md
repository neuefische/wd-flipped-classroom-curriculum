# Mock Interview 1 - ✨Unlock Your Next Job with Practice ✨

## Learning objectives

- Get ready to ace technical interviews
- Sharpen your problem-solving and coding skills
- Boost your confidence in interviews
- Overcome challenges when feeling stuck or experiencing a mental block during an interview

> 💡 It might be beneficial for the coach to ask for a volunteer candidate a day before the session.

---

## Disclaimer: If you'd rather not read, you can watch a recorded session in action [here](https://drive.google.com/file/d/12aP1psjYGDVQn7uDiixEnu2OvfPDUmsq/view) while enjoying your favorite coffee ☕🎦

- If interested here is also a [workshop](https://drive.google.com/drive/folders/1ZP3A3hNo2jTYX5Tq63-Rz-QlBey-zuQK) on technical interviews we conducted earlier.

> 💰 Interviewing is the most
> profitable skill you can learn! 💰

> ✨3 mock interviews make you 6x more likely to get hired! ✨

> Making mistakes during a real interview can be costly and may result in losing the position you're applying for. However, in a mock interview, mistakes are not only welcome but also provide valuable learning opportunities. Embrace the chance to make plenty of mistakes now, as they will help you and others learn and avoid them in real interviews. So, get ready to embrace the mock interview and make mistakes, because the more mistakes you make now, the fewer you'll make in a real interview!

### Why is the content of today's block that important for the students?

- Boost your interview confidence and become more proficient in foundational problem-solving and coding skills.
- Today's session is crucial for securing your first position as a software engineer. Mastering interviews is the key to unlocking your next job opportunity!

- Build Interviewing Confidence!

- Your mock interview will be conducted by a friendly senior software engineer and they’ll give you personalized feedback to help you keep improving.

### Question

- Are you ready for your next interview?
- What should you do if you feel stuck or experience a mental block during an interview?

---

## Activate prior knowledge of students

In this session, we will be putting your previously learned JavaScript concepts to the test. The challenges and tasks provided will require you to utilize and apply the foundational coding skills you have acquired so far. This is an opportunity to reinforce your understanding and demonstrate your problem-solving abilities in a practical setting. By actively engaging with the exercises, you will gain confidence and further solidify your knowledge of JavaScript. So get ready to showcase your skills and take your coding abilities to the next level!

## Session Guide

In today's session, we are conducting a mock interview where you play the role of the interviewer and one of the students plays the role of the candidate. Remember, since this is their first interview ever, they may be shy and nervous. Encourage them and make them feel comfortable with making mistakes. Additionally, give the candidate the opportunity to introduce themselves briefly and share their professional background.

Here are some rules to help everyone engage:

- The candidate can raise their hand at any point during the interview and request to switch back to the classroom setup to ask questions.
- Others can also raise their hand and request to switch when they have questions.
- Before the interview begins, be sure to request remote control (using the zoom feature) so that you can step in and help correct any typos. This will not only reduce their nervousness, but also ensure a seamless interview experience.
- Feel free to utilize this [extension](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) that enables you to run code with just a click of a button, eliminating the need for terminal work and allowing the student to solely focus on the code and problem at hand.

### The Problem

Let's look at the following problem (this is an exercise from the challenge):

```js
const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // TODO: return the longest word
}
```

> Please note that the guidance provided here is intended for on-demand assistance. However, during the interview, it is important to refrain from providing excessive guidance and instead focus on creating an interactive and engaging environment. (feel free to refer to the recorded session [here][video])

We want to write a function that gives us the longest word from an array.

### Step 1: Understanding the Problem

- Discuss the importance of thoroughly understanding the problem before attempting to solve it.
- Emphasize identifying inputs and outputs. "What does the function get, what does it return?"
- This step is also the time to ask clarifying questions in case the problem is not clear
- When talking about code and coming up with a solution we need to be very exact in our language when we say "the function gets strings" we are not exact enough. It should be "it gets an array of strings."

### Step 2: Coming up with a solution in plain language

- Ask students if they have any ideas of how to solve the above problem with code.

<details>

 <summary>💡Details of the actual challenge:</summary>

- Every one of the students could solve this problem. In the sense that you could give them a list of words and they could tell you which is the longest.
- So the problem is not that the task is too complicated, the problem is to come up with small incremental steps, because this is how you instruct the computer to solve this problem.
- The key to come up with these steps is to make yourself aware what happens in your brain when you solve this task. It helps if you make the input more complicated, i.e. the list consists of a thousand words so you cannot see at a glance which is the longest

</details>

- Ask the students how they would solve this problem with pen and paper

<details>
 <summary>💡Details on how to probably solve:</summary>
 
1.  You would have a small piece of paper. 
2.  Going through the list of words you would note the first word on the small piece of paper. 
3. For every word on the list you would compare it to the word on the small piece of paper. 
4. If it's longer the word on the small piece of paper would be replaced and so on.

</details>

- Students should write down these instructions in plain language in a way so that another person could execute them without making any mistakes.

<details>

 <summary>💡Details on how to probably solve:</summary>
 
- The instructions must be very precise, as vague directions like "_check every word_" are insufficient. The other person would not understand exactly what steps to take.
- Introduce strategies for breaking down problems, such as divide and conquer, where the problem is divided into smaller, manageable parts
   -  For example, these smaller problems could include iterating over an array, comparing the lengths of two strings, and reassigning a variable.
- Another approach is to reduce the problem's complexity by implementing a basic version first, then adding the more complex parts later.
- In addition to plain language, you can also use pseudocode to describe the steps.

</details>

- Ask the student to write these steps as comments into the function body.
- Start by asking "_What is the equivalent for that small piece of paper in the JavaScript code?_" **Yes, a variable.**

It could look like this:

```js
const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // create a variable 'longestWord', start with an empty string
  // iterate over the array of words
  // for every word check if the word you are at in the iteration
  // is longer than the 'longestWord'
  // if yes, the word you are at in the iteration becomes the 'longestWord'
  // after the iteration over the array return the 'longestWord'
}
```

### Section 3: Implementation

- Guide the candidate to replace each comment one by one with JavaScript statements.
- Consistently ask the candidate, "What is the next small step we need to implement?"
- Instruct the candidate to replace the comment with the appropriate code snippet. For example, if the comment says "_the word we are currently at in the loop,_" the corresponding code could be` array[i]` or `word` when using a `for` of loop.
- Ensure that the candidate tests each line of code. For instance, when implementing the logic for iterating over the loop, have them add a` console.log()` statement to log every element within the array.

```js
const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // create a variable 'longestWord', start with an empty string
  let longestWord = "";
  // iterate over the array of words
  for (let word of words) {
    // for every word check if the word you are at in the iteration
    // is longer than the 'longestWord'
    if (word.length > longestWord.length) {
      // if yes, the word you are at in the iteration becomes the 'longestWord'
      longestWord = word;
    }
    // after the iteration over the array return the 'longestWord'
    return longestWord;
  }
}
```

### Section 2

If there is still time left in the 1-hour interview (which has rarely been the case in our previous sessions), celebrate the candidate's success in solving the first question and proceed to present them with another problem. One interesting problem to consider is the `uniquifyArray` challenge from the challenge file, but feel free to choose any other problem that you find suitable and engaging.

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

This approach should be practiced constantly with the students. For this. At the beginning always discuss the task with the students. Make sure the problem is understood. Be very strict about using exact language when coming up with the steps to solve the problem (written as comments in the function body) and about using the correct technical terms when discussing the code.
For the first few times come up with the steps in plain English together with the students. At some point though they should be able to come up with a solution themselves.

---

## Process: Challenges

- Provide hands-on challenges that require students to apply the discussed problem-solving strategies and JavaScript concepts.
- Encourage collaboration among students to foster peer learning.

### Challenge Setup

- Each student will receive a set of problems varying in difficulty.
- Students will work individually for the first half and then in pairs to discuss and refine their solutions.

### Ground Rules

- Meet again 30 min before lunch break in the classroom.
- Ask the coaches for help at any time.
- Always try to help each other.
- Take a break within the next 1.5 hrs.
- Keep an eye on Slack.

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed at the beginning of the session and try to answer it with a few phrases.

---

## Checkout

> 💡 In case the students seem frustrated, try to find some encouraging words (e.g., remind them of how far they have come already) :)

- Summarize the day by repeating all of the topics that were discussed.
- Highlight the progress made that day.
- Encourage the students to practice what they learned with more problems.
- Remind them to rest :)

## Keywords for Recap:

Problem Solving, Understanding, Planning, Executing, Reviewing, Practice
