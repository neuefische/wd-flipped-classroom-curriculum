# UX/UI Principles for Web Developers

## Learning Objectives

- Understanding the difference between UX and UI design.
- Identifying examples of good and poor UX/UI.
- Applying core UI principles such as hierarchy, balance, and contrast.
- Recognising the importance of usability and accessibility in web development.
- Connecting UX/UI principles to real-world applications.

## Requirements

- CSS

## Demo

Coaches can use the Design Sensei Tool to introduce and explain the topic. Feel free to explore various approaches, such as:

- Comparing examples like Amazon vs. AliExpress to highlight good and poor UX/UI.
- Utilising visual aids such as an Excalidraw sketch for key principles like hierarchy or contrast.
- Choosing any other method or material that aligns with your teaching style and ensures clarity for students.

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/ux-ui-principles/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/ux-ui-principles/demo-end
```

---

## Session Guide

In this session, we'll explore the principles of UX (User Experience) and UI (User Interface) design. These concepts are essential for creating web applications that are not only functional but also user-friendly, accessible, and visually appealing.

> Why do you think users are more likely to engage with a well-designed and intuitive website?

### What is UX/UI Design?

### UX (User Experience): How it Feels

- Focuses on how users **feel** and interact with a product.
- Encompasses the entire journey, from discovering the product to completing their goal.
- Ensures a product is:
  - Easy to use – Intuitive navigation and workflows.
  - Accessible – Usable for all, regardless of ability.
  - Enjoyable – Smooth, satisfying interactions that reduce frustration.

Using the example of an Online Store great UX ensures users can:

- Discover Products – Easily find products through intuitive navigation and filters.
- Make decisions – High-quality product images, clear descriptions, and user reviews.
- Purchase efficiently – Quickly add items to the cart with clear CTAs (Call to Actions).Complete the checkout process without confusion or frustration.
- Receive their order seamlessly – Transparent shipping information and order tracking.
- Handle returns or issues easily – User-friendly return processes and responsive customer support.

#### Customer Journey

The Customer Journey encompasses all steps a user takes when interacting with an online store:

- Awareness – Finding the store (e.g., via search or ads).
- Consideration – Browsing, comparing products, reading reviews.
- Purchase – Adding to cart and completing checkout.
- Post-Purchase – Receiving the product, evaluating satisfaction.
- Support/Returns – Handling returns, refunds, or contacting support.

##### Difference between UX and Customer Journey

- The Customer Journey is the entire process a user goes through when interacting with a product or service, focusing on what happens and when.

- UX (User Experience) is about how the user feels at each step of that journey, ensuring interactions are smooth, intuitive, and satisfying.

> 💡 The Customer Journey is the path, and UX is the quality of the experience along that path.

#### Why does UX matter?

- A good UX ensures that users can achieve their goals smoothly, leaving them feeling confident and satisfied.
- When interactions are intuitive and enjoyable, users are more likely to stay, explore, and return.
- Clear navigation, efficient workflows, and error prevention minimize user frustration.
- A seamless experience encourages conversions, builds trust, and increases user retention.

> 💡 Good UX turns a product into something users love to use.

### UI (User Interface): How it Looks

- Focuses on the **visual and interactive elements** of a product.
- Determines how information is presented and how users interact with it.
- Ensures users can:
  - Identify key elements like buttons and headings.
  - Interact effortlessly with consistent and clear designs.

Using the example of an Online Store great UI ensures users can:

- Quickly identify key elements – Product names, prices, and prominent “Add to Cart” buttons.
- Easily interact with the design – Buttons, links, and navigation respond intuitively to user actions.
- Feel visually guided – Clean layouts, consistent design patterns, and appropriate spacing guide attention.
- Scan and compare content effortlessly – Clear typography and structured layouts make product details, reviews, and images easy to digest.

  > 💡 Great UX ensures users feel confident and satisfied while interacting with a product. Great UI supports that experience with clear, appealing, and functional design.

#### Why does UI matter?

- A clean, consistent, and visually appealing UI makes the product look professional and trustworthy.
- Good UI supports the overall user experience (UX) by reducing friction and helping users achieve their goals smoothly.
- Poor UI, on the other hand, creates frustration, confusion, and drives users away.

> 💡 A great UI doesn’t just look good; it ensures users can interact with the product effortlessly and intuitively.

### Summary: The Relationship Between UX and UI

- UX is about the overall experience: "How does the product feel?"
- UI is about the interface: "How does the product look and function visually?"

Both are essential – a product with great UX but poor UI may feel usable but look unprofessional, while a product with beautiful UI but poor UX may look good but frustrate users.

### Bringing It Together: The Role of Web Devs in UX/UI

As Web Developers, our primary focus is to build the UI — the interface users interact with.

1. We build the UI.

- We translate designs into clean, responsive, and functional code.
- The UI we create must be consistent, accessible, and intuitive.

2. We influence the UX through our UI.

- Even small coding decisions affect the user experience:
  - Are buttons easy to click?
  - Is navigation smooth and intuitive?
  - Does the interface respond quickly and efficiently?
- As developers, we impact other crucial aspects of UX, including:
  - **Speed of the Website:** Optimising loading times and responsiveness.
  - **Consistency:** Avoiding flickering during page transitions and ensuring uniform experiences.
  - **Functionality:** Implementing robust data-saving mechanisms, error handling, and restoring user progress effectively.

> 💡 Our responsibility as Web Developers: To bring designs to life by applying core UI principles that enhance clarity, usability, and accessibility.

### Main Principles of UI Design

Now that we understand our role, let's focus on the key principles for building great UI.

You can use the Demo code to highlight the following principles:

#### White Space

Using empty space to reduce clutter and improve focus + grouping related elements to improve clarity.

- Move to the first section "white space" in the demo and fix the example.
- Add Padding to the `.content` container.
- add margin to the `h3` tag.
- add line height and margin to the `p` tag.

#### Typography

Ensuring text is clear and easy to scan.

- Move on to the next section.
- Highlight, that the Font does not match the brand image and that the text is hard to read.
- Change the font of the `h3` tag to `"Playfair Display"`.
- Increase the font size of the header.
- remove the font-weight attribute of the `p` tag and adjust the line height.

#### Color and Contrast

Setting the mood of the page, highlighting important elements like buttons or headings, ensuring readability.

- Move to section "color and contrast".
- Point out that the example uses too much color, the update tag does not stand out. Further, the contrast of the last card is very low.
- Briefly mention the 60-30-10 rule and that high contrast colors should be used for only 10% of the page.
- Instead of coloring in the card background, color in the left border of the card:

  ```css
  li {
    /*...*/
    border: solid 8px;
    color: white;
  }

  .thriller {
    border-color: rgb(232, 60, 92);
  }
  .drama {
    border-color: rgb(109, 194, 72);
  }
  .comedy {
    border-color: rgb(50, 144, 195);
  }
  .art-house {
    border-color: rgb(95, 30, 147);
  }
  ```

#### Visual Hierarchy

Guiding user attention through size, color, and spacing + Creating order and structure in layouts.
Let's explore each of these principles with examples and best practices to understand how they help us create better UIs with the Design Sensei.

- Open the last section "hierarchy".
- Elaborate, that the hierarchy of the elements is not clear and that its hard to see which elements belong together.
- Show, that we can use the previously learned concepts to influence the hierarchy of elements.
- adjust the `gap` of the content to `3rem`.
- remove the margin of the `h3` and increase its font size.
- Change the font of the `h3` to `"Playfair Display"` and increase the brightness of the font by applying the color `#f1f1ff`;
- increase the font size of the `h4` to 1rem and give it a muted primary color, e.g. `rgb(169, 169, 251)`.
