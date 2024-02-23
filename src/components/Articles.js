import '../assets/css/style.css';

function Articles({sections, title, status}) {
    return (
        <article class={status} data-page="about">

            <header>
                <h2 class="h2 article-title">{title}</h2>
            </header>
            {sections}
        </article>
    );
}

export default Articles;