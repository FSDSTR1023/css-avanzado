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
              <h3>Customer Reviews</h3>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nOWVwQqCQBRFT9tahNEiwQ+olVBJJEVQbSRoI4Tz/z8SD55gpM44zqouXBDffeeCAyP8k2bAQy3PwXUGjPoUGr5owGsvQxZcWwpuoeCrFnhtmXlrCsRA0VNQaEayViVABtyBsgdqOlzqbqasD8UeQGNx7Pqdjae/zicNCN92ncM+AHxnO+xsBPwATGwFEsg94EcXeK3EoyBhgDYeBeshBT7nkI293IzFsuOsZwfkom6byY6zXo3FSn8wUWMe6buqkZMdZ6V6eeXAvCcnM8lIVnZ+UG8juFD2E4hhxgAAAABJRU5ErkJggg==" alt=""></img>
              <span> Based on 1624 reviews</span>
              <div className="customerreviews">
                <span>5</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img><img src="./63porciento.png" alt="" className="barra"></img>
                <span> 63 %</span>
              </div>
              <div className="customerreviews">
                <span>4</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img><img src="./10porciento.png" alt="" className="barra"></img>
                <span> 10 %</span>
              </div>
              <div className="customerreviews">
                <span>3</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img><img src="./6porciento.png" alt="" className="barra"></img>
                <span> 6 %</span>
              </div>
              <div className="customerreviews">
                <span>2</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img><img src="./12porciento.png" alt="" className="barra"></img>
                <span> 12 %</span>
              </div>
              <div className="customerreviews">
                <span>1</span>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFklEQVR4nOXUO2/TUBgGYFOoG8eXOE5spwsRaxEsSPyEjtx+ASz8BSZgBHVjQh1BsCC2LoQ4zsVJmjYXxyYExMIIEgPqWvSdF502NI5cWkeEAXGks9nP+/n10RGE/2rh/eoNvv8ODuEMRvYHhPYnQFhafEBgXUdoA6EFBNa1xQeEVh2BBQz5NmsLxlevHOG+CQzygG9cXVzA0HyJoTnF+3mga7z4M3S0JqJfKMI31zE096d4DujlgF1jHx1jHX29iJEgnox9tC/gnb2JUWELoe0jsL/GKhlE8K7BA4CdLFhHB9vWQe3MF2prA2pqW+SpT9HSi5FpzQJCexw5JYhV0uO4McGzMzhrZ8BafGtgTRXkqWM4sj37FeH5LALLm5ySCJ6LTT3FMxOcwxqYx3FlBw3FPL6qz8UU/PzrJJWw4/CG8hZVUzn5f7wSzqKf35ynEsbxuvIMPWE5+bXQNTaSVHI4ubzB30mEH4XsGrdOq4Q1FLC6AtSkm3PhBwEd/fFsJdpMJb9wVpNBrvxo7gDa1t3fVXKIywc4q6ZBrlSZb3oIS9TW9uKnRB5TXR5HceamQRVpDw/nuMLhZS9GKyFP+Q5PucevBFSFc3DTd8mVvjFXAqtIYE4KcMS15AEt9Q6fmhoqkac8R0u2Ys+80QxyUk+onPrByitAaeV28oCm9oA8tYyafOnUZ53ly1QSHZTE+4kD/qn1E26yXdMoCNuSAAAAAElFTkSuQmCC" alt=""></img><img src="./9porciento.png" alt=""></img>
                <span> 9 %</span>
              </div>
              <h3>Share your thoughts</h3>
              <p className="textoizqda">If you’ve used this product, share your thoughts with other customers</p>
              <button className="boton">Write a Review</button>
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
          <hr width="100%"></hr>
      </main>
      <footer className="App-footer">
        <div className="footerbox">
          <div className="busqueda">
            <img className="iconobusqueda" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABI0lEQVR4nO2WwUrDQBCGv8SAXtJTQdtcjL21N+vZEhNBiOL7v40M/AuDl2Y3S1TsD3PZzMyX7MxOFi76RSqBBjgCPfAu67XWyCerNsAAfJ6xQb6zVQAHl7gDHoAauJLVWuuc316xyToo0QdwfyaZPWvlG+BJ2jjoOiJu7eDR2166mtqXxqp1NY9quMbVNKVWhav5NibwSUHWNKnaKYcdtcnqFWQdm6paOSzXZI0KqmaAK+UY/wS4z7DVK9fZk3XM2FyPSx+nl5TjVLoBYsNgzgApfmJk3pGovYO3kT+JN+A6FVw4eKj5Tt1eyVZaCzUN0OCfDI+5CLwCt4J1ueClOjRcfUZdfQYdme23UmSFx8rD7WVv+I/w05LgAD8Bz0uDL8L0BaKkKFjF3DttAAAAAElFTkSuQmCC"></img>
            <input id="headlessui-combobox-input-3" role="combobox" type="text" aria-expanded="true" aria-autocomplete="list" data-headlessui-state="open" value="Search..." aria-controls="headlessui-combobox-options-4"></input>
            <hr width="100%"></hr>
          </div>
          <ul className="listabusqueda" role="listbox" id="headlessui-combobox-options-4" data-headlessui-state="">
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
            <img className="iconos" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcklEQVR4nGMIrf/PFl3zszOm5uezmJpf/2mKq389ja7+2QGykwHEoLmFNagYZCcDXXxa8+t/QM7t/yLSZv/ZOAT+m3lO/sBAL1/6pF/4z8Et9p+BgeE/G4fgfwyLHSM2/OfilQIrIBezsvP9d084BPcpyFKI5efBlovKWGBazMUnTVVLeQTkwZb5pJ+H+xwkjmExtS2FyXGALb+AsIdaFrOwcv93i9sLNiMw9+5/HkFFFHluftn/Adk3qWsxqZbGUMNiciyNwWcxqdkFbKmAAlGWxlDLYlBC4uaXQ7EUlLBA4iB5WIKjqsWEfAqyFJTaqWoxIZ+CMMhSbOaRbTFOn+bcIso8BnItVjFMJmgpTSwWk7UmaClNLOYTVv8vJmf7X9Uo5X9g7h2c6qhucQyReNTimNGgjhnoxMVFYdMHG+bikyFssVPEJqpaDrLUKXIzYYvphRlA3Qp6Wxpd8+vJgHRhYmp+tjOAO20gy+nhc6ROGwAA5xVeZDmdXwAAAABJRU5ErkJggg==" alt=""></img>
            <div className="textobusqueda">
              <span>Text</span>
              <span className="fuentegris">Add freeform text with basic formatting options.</span>
            </div>
          </li>
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
          <img className="iconos" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABM0lEQVR4nGNw3/BD3XPdz6Ne637+9lr/6z9V8DqQWT+PeK77ocYANpxaBq9Hxz8PM1DV5esxfcJAO9f/AuNhZIHLouf/xYy9/jOxsP1nYGAgiFm4+P4r+uWDwpk4CxS8c8CGg2jloFKCWNI6BGyRccUauGGea779Nyxd/t+iZS+mBcK6Dv8FNa2J9rrn2u9gC1Qj6/67LXv7XzOp5z+nqBxYTFjXEYsFOvZgTFL4MjD855XX+c/KLQBmC2nb/ucSV0Qxh2ILGBmZ/ouZeP+37DiE1RyKLVAJqUQRG3oWMNI6iHiJjmRqJlM9JywZzScXnNGUAkv+q8e2EsRSdhE4M5pV52EcRYWJN4lFRQHxRQWtMMMwsGAdzavMn0doZYHnup+HGEBNC1DtT+1mC8hw7zU/VAFKPemV1MJEAgAAAABJRU5ErkJggg=="></img>
            <div className="textobusqueda">
              <span>Video</span>
              <span className="fuentegris">Add a video fro Youtube, Vimeo or other services.</span>
            </div>
          </li>
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
            <img className="iconos" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nGO4ovWf7YXu//YXev8fP9f9/4ca+IXu/0cvdP+3gcxmADGoZfBzTIvaGNBdvlRh219JVpn/DAwMJGEpVtn/IL1oljxhQLcVpJBUwxmQLEE3D8MCmGJSg4MBh75RC/6MBtGf0VTEMDIzGgOe8oimFhSL1/2lmQXFWAynmgXFOAynigXFeAzHagEpFU6RWN0/gqkLVEEjC4CqPWIsKSLC8Be6/x/StNJ/rve/lQHabGlD9wklGLnZAgB1j8jD3v1H6AAAAABJRU5ErkJggg==" alt=""></img>
            <div className="textobusqueda">
              <span>Page</span>
              <span className="fuentegris">Add a new blank page to your project.</span>
            </div>
          </li>
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
          <img className="iconos" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVR4nGPQurKKTf7ktE6FE9OeKZyc/p9K+Kn8iekdILMZQAxsihgYGMBYgYBh+NSBzGbA5XJqWKBwYvpzBmQB8f7s/yxignBNpGKQXvH+HFQHIHMoMZwBZom4IG4LiA0WBRKCa2AsYKAQKwy4BQpDPg4URi04ORpEJ0dsKmKhdXEt3p8DVkCJ4eITMCucp+QGiQJBPO0JzkqfKvjE9HYGcLMFYgk1fQJvtgAA3TulwzX7exgAAAAASUVORK5CYII="></img>
            <div className="textobusqueda">
              <span>Calendar</span>
              <span className="fuentegris">Add a full month calendar or a week view calendar.</span>
            </div>
          </li>
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
            <img className="iconos" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nO2XzQ3CMAyF3z03OMEUwBSdA8WMwEJNmKNkFZcd6CkorVpVrYBLfkDy4V0sy19iOY4NALjUjxNZdtrwkyz7FNJDbHe+tUdMUMNdKuBKhrseHk6RDWqn2zdImd5PacfSWF1rrzY7DyCK1Hbfx6QFZwUOjrGgczh9A4/OKW0kYJqlJrbo58EkxYVMzwlSXJDOBSkuL52L/uI/VqVGnyoMexHhb4c9XXC8dQXADcI6kXuF0aY99PtTgGvL99RLW7jpCH0BfS6qGuheeN0AAAAASUVORK5CYII=" alt=""></img>
            <div className="textobusqueda">
              <span>Table</span>
              <span className="fuentegris">Add a table for displaying larger sets of data.</span>
            </div>
          </li>
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
          <img className="iconos" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nGNgYGBgOJX0RP1M6uPpp1MfHTqd+ug4jfAhkB0XUp6oMcAsPZ36mJYWouHHh8CWQ316nJ74TMqjaQw0Dl6cwc4A47Q4TbkuyCH8k4GB4T8tsCCn8M82p6nXYfbBLQZJ0MpSGBbiFPmJYTGtLWWA4lGLjw94UJ+mURZiGPIWn0p9eFxLVO+jqpDWJ5pYfDjxxkllQfXPaiI6KBYsCdp2AaRegEMInjfVhLQ/qQhqfAbpodjiIM3opyBxOX6lr8ji2aYV90Di1rKOb2BicnyKX0FiQZoxTymyeLrX8stMjEz/GBkZ/0/yXHwFWc5K1uENSH2uaeU9YtQzEGvxkcRbJ6V55b/h8gEoiEFyS4O2X8AWQpI8st+Qg5yBPIujUSxeHACLX8Ff6A4K1IiizOLTeIIu26QcEr9yzq+xqQfh6V4rL1MncfEpfsUXv1RNXKeh2QmURUBZBRG/gr+wxS8oT4MwVbLTaSxYW9Tgo7ao/kdi1FLV4tNkYIZBazHDSGiBHKJV8OLBhwauQX8h5Ykavbsw59Ifq4L7TyDLT6U+on2nLeXRNJilAGotoX206accAAAAAElFTkSuQmCC"></img>
            <div className="textobusqueda">
              <span>Code</span>
              <span className="fuentegris">Add raw HTML, Javascript or CSS code.</span>
            </div>
          </li>
          <li className="elementolista" id="headlessui-combobox-option-5" role="option" tabindex="-1" aria-selected="false" data-headlessui-state="">
          <img className="iconos" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nGP4b2zM+l/XOvu/rvXm/3o2x6mCda03/9e1yQKZzQBmUMtgPXSLbLIYqOpyPQy8hYGGhh8HYbgFK+U0rouxsP5kYGD4TwkWZ2H9CTILwwJxKhjOgGQJhgUwSYqDhAHVnMFhgT4H9ydDDu5PNLPAkIP7kxEnDS34T+84eK5pdtqZW+DtR23LkxRbsFtR5zIy/7OO5Uk9Du5PILWB/MKvKLJgjZzGNSYGxn/pQhJPQfw/ejbHXXkE3iKn+X5JxTtkWXBdzegcHzPzb5h4vojk4wRB8WfomYqTienvKRX9CyRZ8EXH6qQmO+cXYnOuEhvHN1h8DI1U9J8cC2he2K2U07guTsvi+j+NMANNq0xdm020rfT1bDIZIM0WmyxaNVsAZygn0L3q2cEAAAAASUVORK5CYII="></img>
            <div className="textobusqueda">
              <span>Image</span>
              <span className="fuentegris">Add a simple image or a photo gallery.</span>
            </div>
          </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
