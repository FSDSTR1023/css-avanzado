import './App.css';
import { Comment } from './components/Comment';
import { StarIcon } from './components/Star-icon';
import { StarsBar } from './components/Stars-bar';

const comments = [
  {
    img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    name: 'Emily Selman',
    stars: 5,
    comment: 'This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    name: 'Hector Gibbons',
    stars: 5,
    comment: 'Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!'
  },
  {
    img: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Mark Edwards',
    stars: 4,
    comment: 'I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins.'
  }
]

function App() {
  return (
    <div className="container">

      <div className='left'>
        <h1>Customer Reviews</h1>
        <div className='based'>
          <span>
            <StarIcon full />
            <StarIcon full />
            <StarIcon full />
            <StarIcon full />
            <StarIcon />
          </span>
          <span>
            Based on 1624 reviews
          </span>
        </div>

        <div className='bar-wrap'>
          <StarsBar stars='5' percent='63' />
          <StarsBar stars='4' percent='10' />
          <StarsBar stars='3' percent='6' />
          <StarsBar stars='2' percent='12' />
          <StarsBar stars='1' percent='9' />
        </div>


        <div className='thoughts'>
          <h3>Share Your thoughts</h3>
          <p>If you’ve used this product, share your thoughts with other customers</p>
        </div>
        <a href="/">Write a review</a>
      </div>

      <div className='right'>

        {comments.map((c, i) => (
          <>
            {(i > 0) && <hr />}
            <Comment props={c} />
          </>
        ))}

      </div>

    </div>
  );
}

export default App;
