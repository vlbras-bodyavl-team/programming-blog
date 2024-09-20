import { convert } from "html-to-text";

export const convertHtmlPost = (html: string) => {
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  const hasHtml = htmlRegex.test(html);
  if (!hasHtml) return html;
  return convert(html, {
    selectors: [
      { selector: "ul", format: "block" }, // Treats <ul> as inline text
      { selector: "li", format: "block" }, // Treats <li> as inline text
    ],
  });
};
