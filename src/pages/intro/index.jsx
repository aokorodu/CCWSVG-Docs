import Markdown from "react-markdown";
const Intro = () => {
  const str = `
  # Intro

  In this course you'll learn all about the SVG - probably the most powerful and versatile visual format for the web today. SVGs allow you to create all kinds of interesting visualizations - from simple images, infographics, interactive images, animations, and even games. 

  ## What you'll learn

  1. the elements and syntax of an SVG
  2. how to create SVGs
  - using free drawing tools like Figma
  - "by hand" (in code using SVG markup)
  - dynamically using JavaScript
  4. Styling SVGs using presentation attributes and CSS
  5. How to make SVGs interactive
  6. How to animate SVGs

  ## Prerequisits
1. A basic understanding of html, and the fundamental elements of an html page.
2. How to create and apply CSS styles
3. A fundamental understanding of variables, functions, and event listeners.

~~~html
<svg>
<rect x="0" y="0" width="100" height="100" fill="red" />
</svg>
~~~

## Tools

- A code editor, like VS Code, Atom, Sublime Text, or even a simple text editor.
- A drawing program capable of exporting files in the SVG format, like Figma

  `;
  return (
    <>
      <div>
        <Markdown>{str}</Markdown>
      </div>
    </>
  );
};

export default Intro;
