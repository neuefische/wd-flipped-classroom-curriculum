# CSS Animations

## Learning objectives

- Understanding the `transition` property
- Understanding easing functions
- Understanding what properties can be animated
- Understanding the `animation` property

## Requirements

- CSS Basics
- CSS Media Queries
- JavaScript Basics (adding classes to elements)

## Demo

Demo Start:

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/css-animation/demo-start
```

Demo End:

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/css-animation/demo-end
```

---

## Session Guide

### What is a CSS transtion?

- Explain that a CSS transtion allows you to animate a change from one value of a property to
      another (like color, opacity, scale, etc.)
- Transitions can look better than abrupt changes because they give the user a sense of
      continuity between states. This can be especially important for users with cognitive
      disabilities.
- Transition can also be overused and too extreme. They can be distracting and annoying and can
      cause motion sickness or even seizures in some people.
- Explain that you need to find a good balance for any type of animation.

### How to use a CSS `transition`

   Explain that you have to define two states for a property you want to animate like this:

```css
.button--color {
  background-color: var(--granite);
}

.button--color:hover {
  background-color: var(--nemo);
}
```

   Show that you can make the browser transition between these two states by adding a
      `transition` property to the box:

```css
.button--color {
  background-color: var(--granite);
  transition: 0.3s ease;
}

.button--color:hover {
  background-color: var(--nemo);
}
```

- Open the browser developer tools and play with the duration, delay and easing function to
      explore how they work. Show built-in (`ease`, `linear`, `ease-in-out`, etc.) and custom easing
      curves. You can also show [cubic-bezier.com](https://cubic-bezier.com) to play with easing
      curves.

- Go to the next button and animate 2 properties with transition, to show that you can animate
      multiple properties at once:

```css
.button--scale {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
  transition: 0.2s ease;
}

.button--scale:active {
  transform: scale(0.9);
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
```

- Sometimes you want to animate properties differently, show how to do that with the next button

  ```css
  .button--shadow {
    background-color: var(--nemo);
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition:
      background-color 0.5s ease-out,
      box-shadow 1s ease 0.5s;
    /* add transition here */
  }

  .button--shadow:hover {
    background-color: var(--granite);
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  ```

### Animatable properties

- Explain that not all properties can be animated. For example, `display` and `position` cannot
      be animated. You can find a list of animatable properties on
      [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

- Explain that some properties can have negative performance implications. For example,
      animating `width` and `height` can cause the browser to recalculate the layout of the page for
      each frame (usually 60 times per second). Tell students to avoid animating these properties.

- Show some properties that are safe and cheap to animate: `color`, `opacity`, `transform`,
      `box-shadow` etc.

### Animating between multiple states

- If you want to transition between multiple stages you need to use extra classes which are
      added / removed by javascript

  ```css
  .position--0 {
    left: 0;
    /* add transition 'into state 0' here */
  }

  .position--1 {
    left: 200px;
    /* add transition 'into state 1' here */
  }

  .position--2 {
    left: 70%;
    /* add transition 'into state 2' here */
  }
  ```

- Use the third button which already has this implemented
- Show how to add different transitions between these stages by adding a transition property to
      each stage
- highlight, that these transitions can be interpreted as "transition to this state", as the
      transition will take place only when this class is on the element.

  ```css
  .position--0 {
    left: 0;
    transition: left 0.4s cubic-bezier(0.68, -0.55, 0.12, 0.93);
  }

  .position--1 {
    left: 200px;
    transition: left 0.4s ease;
  }

  .position--2 {
    left: 70%;
    transition: left 0.8s ease-out;
  }
  ```
