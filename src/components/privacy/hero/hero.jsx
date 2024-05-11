import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function PrivacyHero(block) {
  return (
    <section className="privacy-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="privacy-hero-content text-center">
              <h1>{block.title}</h1>
              {block.description && <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
