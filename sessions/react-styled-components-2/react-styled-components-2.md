# React Styled Components

## Learning Objectives

- [ ] Knowing how to use styled components
  - [ ] adapt styling based on props

---

### Adapting based on props

You can adapt styling based on props. To do so, you need to pass the props to the styled component. Most of the time you'll want to prefix the prop with a `$`. This tells styled components, that the prop should not be passed to the underlying DOM element or component and should only be used for styling.

```js
import styled from "styled-components";

export default function List() {
  return (
    <StyledList $isOnFire>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </StyledList>
  );
}
```

To use the props to change the styles interpolate a function into the styling template sting. The function receives the props as an argument.

For example, you can use the ternary operator to check whether a property is true or false:

```js
const StyledList = styled.ul`
  list-style-type: ${(props) => (props.$isOnFire ? "🔥" : "❄️")};
  /* or with destructuring: */
  list-style-type: ${({ $isOnFire }) => ($isOnFire ? "🔥" : "❄️")};
`;
```

If you want to set several CSS properties based on the same prop, you can use the `css` helper:

```js
import styled, { css } from "styled-components";

const StyledList = styled.ul`
  ${({ $isOnFire }) =>
    $isOnFire &&
    css`
      list-style-type: "🔥";
      background-color: red;
      color: white;
    `}
`;
```

> 💡 Besides others, the advantages of the `css` helper is syntax highlighting and performance optimization.

> 📙 Read more about [styling based on props](https://styled-components.com/docs/basics#adapting-based-on-props).


