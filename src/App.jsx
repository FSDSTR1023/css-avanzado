import logo from './logo.svg';
import './App.css';
import FullStar from './FullStar';
import EmptyStar from './EmptyStar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav className='nav-wrapper'>
          <img src={logo} className="nav-logo" alt="logo" />
          <ul className='nav-items'>
            <li>Product</li>
            <li>Features</li>
            <li>Marketplace</li>
            <li>Users</li>
            <li>Company</li>
            <li>Log in</li>
          </ul>
        </nav>
        <main>

          <h2>Blog</h2>

          <div className="blog-wrapper">

            <div className="blog-title">
              <h3>From the blog</h3>
              <p>Learn how to grow your business with our expert advice.</p>
            </div>

            <div className="blog-content">

              <div className="blog-post">
                <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg" alt="post" />
                <div className="post-info">
                  <span className="post-date">Mar 16, 2020</span>
                  <span className="post-category">Marketing</span>
                </div>
                <div className="post-content">
                  <h4>Boost your conversion rate</h4>
                  <p>
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </div>
                <div className="post-author">
                  <div className="post-author-img">
                    <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="author" />
                  </div>
                  <div className="post-author-info">
                    <strong>Michael Foster</strong>
                    <span>Co-Founder / CTO</span>
                  </div>
                </div>
              </div>

              <div className="blog-post">
                <img src="https://images.pexels.com/photos/2811648/pexels-photo-2811648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />
                <div className="post-info">
                  <span className="post-date">Mar 10, 2020</span>
                  <span className="post-category">Sales</span>
                </div>
                <div className="post-content">
                  <h4>How to use search engine optimization to drive sales</h4>
                  <p>
                    Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.
                  </p>
                </div>
                <div className="post-author">
                  <div className="post-author-img">
                    <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="author" />
                  </div>
                  <div className="post-author-info">
                    <strong>Lindsay Walton</strong>
                    <span>Front-end Developer</span>
                  </div>
                </div>
              </div>

              <div className="blog-post">
                <img src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />
                <div className="post-info">
                  <span className="post-date">Feb 12, 2020</span>
                  <span className="post-category">Business</span>
                </div>
                <div className="post-content">
                  <h4>Improve your customer experience</h4>
                  <p>
                    Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.
                  </p>
                </div>
                <div className="post-author">
                  <div className="post-author-img">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="author" />
                  </div>
                  <div className="post-author-info">
                    <strong>Tom Cook</strong>
                    <span>Director of Product</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <h2>Reviews</h2>

          <div className="review-wrapper">

            <div className="review-summary">

              <h3 className='review-title'>Customer Reviews</h3>

              <div className="review-stars">
                <FullStar/>
                <FullStar/>
                <FullStar/>
                <FullStar/>
                <EmptyStar/>
                <p className='review-count'>Based on 1624 reviews</p>
              </div>

              <div className="review-bars">
                <div className="bar">
                  5
                  <FullStar/>
                  <div className="empty-bar">
                    <div className="full-bar5"></div>
                  </div>
                  63%
                </div>
                <div className="bar">
                  4
                  <FullStar/>
                  <div className="empty-bar">
                    <div className="full-bar4"></div>
                  </div>
                  10%
                </div>
                <div className="bar">
                  3
                  <FullStar/>
                  <div className="empty-bar">
                    <div className="full-bar3"></div>
                  </div>
                  6%
                </div>
                <div className="bar">
                  2
                  <FullStar/>
                  <div className="empty-bar">
                    <div className="full-bar2"></div>
                  </div>
                  12%
                </div>
                <div className="bar">
                  1
                  <FullStar/>
                  <div className="empty-bar">
                    <div className="full-bar1"></div>
                  </div>
                  9%
                </div>
              </div>

              <div className="review-add">
                <h4>Share your thoughts</h4>
                <p>If you've used this product, share your thoughts with other customers</p>
                <button>Write a review</button>
              </div>

            </div>

            <div className="review-list">

              <div className="review-entry">
                <div className="review-user">
                  <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="profile-pict" />
                  <div className="review-user-info">
                    <p>Emily Selman</p>
                    <div className="review-user-stars">
                      <FullStar/>
                      <FullStar/>
                      <FullStar/>
                      <FullStar/>
                      <FullStar/>
                    </div>
                  </div>
                </div>
                <p className="review-comment">
                  This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
                </p>
              </div>

            <div className="review-entry">
              <div className="review-user">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="profile-pict" />
                <div className="review-user-info">
                  <p>Hector Gibbons</p>
                  <div className="review-user-stars">
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                  </div>
                </div>
              </div>
              <p className="review-comment">
              Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!
              </p>
            </div>

            <div className="review-entry">
              <div className="review-user">
                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile-pict" />
                <div className="review-user-info">
                  <p>Mark Edwards</p>
                  <div className="review-user-stars">
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                    <FullStar/>
                    <EmptyStar/>
                  </div>
                </div>
              </div>
              <p className="review-comment">
              I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.
              </p>
            </div>

            </div>

          </div>

          <h2>Tools</h2>

          <div className="tools-wrapper">

            <div className="tools-search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="u aa cq dt nz sb axp"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg>
              <input type="" placeholder='Search...' />
            </div>

            <div className="tools-list">

              <div className="tool">
                <div className="tool-logo tool-color1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
                </div>
                <div className="tool-text">
                  <h3>Text</h3>
                  <p>Add freedom text with basic formatting options.</p>
                </div>
              </div>

              <div className="tool">
                <div className="tool-logo tool-color2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg>  
                </div>
                <div className="tool-text">
                  <h3>Video</h3>
                  <p>Add a video from YouTube, Vimeo or other services.</p>
                </div>
              </div>

              <div className="tool">
                <div className="tool-logo tool-color3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>
                </div>
                <div className="tool-text">
                  <h3>Page</h3>
                  <p>Add a new blank page to your project.</p>
                </div>
              </div>
              
              <div className="tool">
                <div className="tool-logo tool-color4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>
                </div>
                <div className="tool-text">
                  <h3>Calendar</h3>
                  <p>Add a full month calendar or a week view calendar.</p>
                </div>
              </div>
              
              <div className="tool">
                <div className="tool-logo tool-color5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"></path></svg>
                </div>
                <div className="tool-text">
                  <h3>Table</h3>
                  <p>Add a table for displaying larger sets of data.</p>
                </div>
              </div>
              
              <div className="tool">
                <div className="tool-logo tool-color6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>
                </div>
                <div className="tool-text">
                  <h3>Code</h3>
                  <p>Add raw HTLM, JavaScript or CSS code.</p>
                </div>
              </div>
              
              <div className="tool">
                <div className="tool-logo tool-color7">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="oc se bah"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>
                </div>
                <div className="tool-text">
                  <h3>Image</h3>
                  <p>Add a simple image or a photo gallery.</p>
                </div>
              </div>
              
            </div>

          </div>

          <h2>Cards</h2>

          <div className='card-wrapper'>
            
          <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Jane Cooper</p>
              <p className='card-position'>Paradigm Representative</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Cody Fisher</p>
              <p className='card-position'>Lead Security Associate</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Esther Howard</p>
              <p className='card-position'>Assurance Administrator</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Jenny Wilson</p>
              <p className='card-position'>Chief Accountability Analyst</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Kristin Watson</p>
              <p className='card-position'>Investor Data Orchestrator</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Cameron Williamson</p>
              <p className='card-position'>Product Infrastructure Executive</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Courtney Henry</p>
              <p className='card-position'>Investor Factors Associate</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>
            <div className='card'>
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                className="card-image" alt="profile-img"
                />
              <p className='card-name'>Theresa Webb</p>
              <p className='card-position'>Global Division Officer</p>
              <p className='card-rights'>Admin</p>
              <div className='card-actions'>
                <a href="/" className='card-button left-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path></svg>
                  Email
                </a>
                <a href="/" className='card-button right-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="nz sb axp"><path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd"></path></svg>
                  Call
                </a>
              </div>
            </div>


          </div>

        </main>
      </header>
    </div>
  );
}

export default App;