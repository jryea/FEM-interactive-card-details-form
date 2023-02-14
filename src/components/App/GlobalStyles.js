import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
 
 //Reset
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html,
body {




  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root,
#__next {
  isolation: isolate;
}

//GLOBAL STYLES

body {
  font-family: 'Space Grotesk', sans-serif;
  background-color:#F2F2F2;
}

// VARIABLES

--light-violet: hsl(270deg, 3%, 87%);
--dark-violet: hsl(279deg, 6%, 55%);
--very-dark-violet: hsl(278deg, 68%, 11%);
--red: hsl(0deg,100%,66%);
--gradient: linear-gradient(to bottom, hsl(249deg, 99%, 64%), hsl(278deg, 94%, 30%));

`;

export default GlobalStyles;
