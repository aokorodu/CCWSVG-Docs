import ReactMarkdown from "react-markdown";
const Whatis = () => {
  const str = `
  # What's an SVG

  
  ## What it isn't

  Most of the graphics you see on web pages today are what’s known as Bitmap, or Raster Images - PNGs, JPEGs, and GIFs.

  ![alt text for screen readers](./whatis/bitmap_1.png "Text to show on mouseover")

  Bitmap Images are essentially a grid of pixels - lots and lots of tiny, colored, squarish dots - that, when combined, make up an image. 

  ![alt text for screen readers](./whatis/bitmap_resolution.png "Text to show on mouseover")

  If you were to open up a png or jpg file with a text editor, you'd see something like this - rows and rows of unintelligible (to humans) text and numbers. All this data describes every single pixel in a bitmap image.
  ![alt text for screen readers](./whatis/bitmap_insides.png "Text to show on mouseover")

  ## What it is

  SVG is a text-based language for describing two-dimensional graphics. It’s essentially a way to describe images using text that can then be rendered at any size by the browser. 

  ![alt text for screen readers](./whatis/simple.svg "Text to show on mouseover")

  ~~~html
  <svg width="500" height="500" viewBox="0 0 362 362" xmlns="http://www.w3.org/2000/svg">
   <circle cx="181" cy="181" r="181" fill="#F3C729" />
  </svg>
  ~~~
  `;
  return (
    <>
      <div>
        <ReactMarkdown>{str}</ReactMarkdown>
      </div>
    </>
  );
};

export default Whatis;
