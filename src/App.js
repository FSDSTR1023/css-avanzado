import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navitems">
              <li>Product</li>
              <li>Features</li>
              <li>Marketplace</li>
              <li>Company</li>
              <li>Log in -&gt;</li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <ul className="cardlista">
            <li><div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Jane Cooper</h3>
              <p class="cardtitulo">Paradigm Representative</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:janecooper@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Cody Fisher</h3>
              <p class="cardtitulo">Load Security Associate</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:codyfisher@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Esther Howard</h3>
              <p class="cardtitulo">Assurance Administrator</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:estherhoward@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Jenny Wilson</h3>
              <p class="cardtitulo">Chief Accountability Analyst</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:jennywilson@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Kristin Watson</h3>
              <p class="cardtitulo">Investor Data Orchestrator</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:kristinwatson@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Cameron Williamson</h3>
              <p class="cardtitulo">Product Infrastructure Executive</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:cameronwilliamson@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Courtney Henry</h3>
              <p class="cardtitulo">Investor Factors Associate</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:courtneyhenry@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          <li>
          <div className="cardcontacto">
            <div className="carddatos">
              <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" className="cardfoto" alt="foto"></img>
              <h3 className="cardnombre">Theresa Webb</h3>
              <p class="cardtitulo">Global Division Officer</p>
              <p class="cardrole">Admin</p>
            </div>
            <div className="cardbotones">
              <div className="cardemail"><a href="mailto:theresawebb@example.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nM3Sv0qCcRTG8U+1RAgFQV1ATeI1tLT4XkCDg11AQ+02qUNXYsN7B9EmbeENOLgKOrQFtSjCD/355zVfEewLBw7nPOeBAw//hSMkuNuwknAzpYlRzmrMzknRwbm/OcNnuJlygy4GqMqmgj56uI0XpzgOr/zgHdfR/gpv+MULTlCIDV7xGPoi2vjGM2qh/0ApaB7Qig3ShZ8OcI8hvvCEwzV6S4PABS5XzDc2yGL3Bs0tglSPDSaxLOeI8kQ7F+X9MQYJqELPI/tAugAAAABJRU5ErkJggg==" alt=""></img> Email</a></div>
              <div className="cardcall"><a href="tel:+34666666666"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmklEQVR4nM3SwQoBYRTF8d8Um3kQWwsPYM8DyHt4FFnSrHkPK56AwlZhJ6TR1Kcmq5lPyqmzvP97TvfyT5rggRtGMYAL8uBNDGBdAhQpkrqAWQmwj0nQD8MndGIAzbA584WGeKIbC0iwwBGtWEiKZYC8k7RxCNfZVvmTFPNQJwuwvORr1ToD7D6GC9/rVGqghylWOGNcB/BbvQAQ+CtE3LG6AAAAAABJRU5ErkJggg==" alt=""></img> Call</a></div>
            </div>
          </div>
          </li>
          </ul>
          <hr width="75%"></hr>
          <div className="reviews">
            <div className="puntuaciones">
              <h2>Customer Reviews</h2>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nOWVwQqCQBRFT9tahNEiwQ+olVBJJEVQbSRoI4Tz/z8SD55gpM44zqouXBDffeeCAyP8k2bAQy3PwXUGjPoUGr5owGsvQxZcWwpuoeCrFnhtmXlrCsRA0VNQaEayViVABtyBsgdqOlzqbqasD8UeQGNx7Pqdjae/zicNCN92ncM+AHxnO+xsBPwATGwFEsg94EcXeK3EoyBhgDYeBeshBT7nkI293IzFsuOsZwfkom6byY6zXo3FSn8wUWMe6buqkZMdZ6V6eeXAvCcnM8lIVnZ+UG8juFD2E4hhxgAAAABJRU5ErkJggg==" alt=""></img>
              <span> Based on 1624 reviews</span>
              <div className="datos">
                <span>5 </span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                <img src="63porciento.png" alt=""></img><span>63 %</span>
              </div>
            </div>
            <div className="comentarios">
              <div className="datos">
                <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" className="fotoreview" alt=""></img>
                <div className="datosreviews">
                  <span>Emily Selman</span>  
                  <div className="estrellas">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    </div>
                </div>
              </div>
              <div className="comentariostexto">
                <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
              </div>
              <hr></hr>
              <div className="datos">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" className="fotoreview"  alt=""></img>
                <div className="datosreviews">
                  <span>Hector Gibbons</span>  
                  <div className="estrellas">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    </div>
                </div>
              </div>
              <div className="comentariostexto">
                <p>Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!</p>
              </div>
              <hr></hr>
              <div className="datos">
                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="fotoreview" alt=""></img>
                <div className="datosreviews">
                  <span>Mark Edwards</span>  
                  <div className="estrellas">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nOWVwQqCQBRFT9tahNEiwQ+olVBJJEVQbSRoI4Tz/z8SD55gpM44zqouXBDffeeCAyP8k2bAQy3PwXUGjPoUGr5owGsvQxZcWwpuoeCrFnhtmXlrCsRA0VNQaEayViVABtyBsgdqOlzqbqasD8UeQGNx7Pqdjae/zicNCN92ncM+AHxnO+xsBPwATGwFEsg94EcXeK3EoyBhgDYeBeshBT7nkI293IzFsuOsZwfkom6byY6zXo3FSn8wUWMe6buqkZMdZ6V6eeXAvCcnM8lIVnZ+UG8juFD2E4hhxgAAAABJRU5ErkJggg==" alt=""></img>
                    </div>
                </div>
              </div>
              <div className="comentariostexto">
                <p>I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.</p>
              </div>
            </div>
          </div>
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
