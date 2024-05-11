import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ProductGrid(block) {
  return (
    <section className="product-hero">
      <h1>{block.title}</h1>
    </section>
  );
}
