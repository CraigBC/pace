export default function Embedded() {
  return (
    <section id="embedded">
      <header>
        <h2>Embedded content</h2>
      </header>
      <article id="embedded__images">
        <header>
          <h2>Images</h2>
        </header>
        <div>
          <h3>
            Plain <code>&lt;img&gt;</code> element
          </h3>
          <p>
            <img src="/pace-ui-logo.png" alt="This is alt text" />
          </p>
          <h3>
            <code>&lt;figure&gt;</code> element with <code>&lt;img&gt;</code>{" "}
            element
          </h3>
          <figure>
            <img src="/pace-ui-logo.png" alt="This is alt text" />
          </figure>
          <h3>
            <code>&lt;figure&gt;</code> element with <code>&lt;img&gt;</code>{" "}
            and <code>&lt;figcaption&gt;</code> elements
          </h3>
          <figure>
            <img src="/pace-ui-logo.png" alt="This is alt text" />
            <figcaption>Here is a caption for this image.</figcaption>
          </figure>
          <h3>
            <code>&lt;figure&gt;</code> element with a{" "}
            <code>&lt;picture&gt;</code> element
          </h3>
          <figure>
            <picture>
              <source srcSet="/pace-ui-logo.png" media="(min-width: 800px)" />
              <img src="/pace-ui-logo.png" alt="This is alt text" />
            </picture>
          </figure>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__bgimages">
        <header>
          <h2>Background images</h2>
        </header>
        <div
          style={{
            backgroundImage: 'url("/pace-ui-logo.png")',
            width: 300,
            height: 300,
          }}
        />
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__audio">
        <header>
          <h2>Audio</h2>
        </header>
        <div>
          <audio controls={true}>audio</audio>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__video">
        <header>
          <h2>Video</h2>
        </header>
        <div>
          <video controls={true}>video</video>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__canvas">
        <header>
          <h2>Canvas</h2>
        </header>
        <div>
          <canvas>canvas</canvas>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__meter">
        <header>
          <h2>Meter</h2>
        </header>
        <div>
          <meter value={2} min={0} max={10}>
            2 out of 10
          </meter>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__progress">
        <header>
          <h2>Progress</h2>
        </header>
        <div>
          <progress>progress</progress>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__svg">
        <header>
          <h2>Inline SVG</h2>
        </header>
        <div>
          <svg width="100px" height="100px">
            <circle cx={100} cy={100} r={100} fill="#1fa3ec" />
          </svg>
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__iframe">
        <header>
          <h2>IFrame</h2>
        </header>
        <div>
          <iframe src="index.html" height={300} />
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__embed">
        <header>
          <h2>Embed</h2>
        </header>
        <div>
          <embed src="index.html" height={300} />
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
      <article id="embedded__object">
        <header>
          <h2>Object</h2>
        </header>
        <div>
          <object data="index.html" height={300} />
        </div>
        <footer>
          <p>
            <a href="#top">[Top]</a>
          </p>
        </footer>
      </article>
    </section>
  );
}
