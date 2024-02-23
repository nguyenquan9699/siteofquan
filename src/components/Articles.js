import '../assets/css/style.css'

function Articles({ sections, title, status }) {
  return (
    <article class={`${title} ${status}`} data-page={title}>
      <header>
        <h2 class="h2 article-title">{title}</h2>
      </header>
      {sections}
    </article>
  )
}

export default Articles
