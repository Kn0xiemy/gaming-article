export default function MainSection() {
  return (
    <section className="main-container">
      <div className="article-container">
        <div className="welcome-section">
          <h2>Welcome to the latest news in gaming history!</h2>
        </div>
		<h2 className="section-title">Latest Articles &#128293;</h2>
        <div className="article-list">
          <div className="article">
            <div className="image-wrap">
              <img src="https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg" alt="image-holder" />
              {/* To place dynamic image value above for later */}
            </div>
            {/* To place dynamic title for later */}
            <h3>Incredible News!</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloribus!</p>
            <div className="details-button">
              {/* To place dynamic button value later */}
              <button>Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
