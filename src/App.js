
import './App.css';
import { useState } from 'react';
import { data } from './data';


function App() {

const [books, setBooks] =useState (data);
const removeBooks = (id) => {
let newBooks = books.filter(book => book.id !==id);
setBooks (newBooks)
}
const [book, setBook] =useState (0);
const {id, name,  image} = data[book];
const previousBook =() => {
  setBook (book =>{
book --;
if (book <0) {
book =data.length -1;
}
return book;
  })


  }
   
  const nextBook =() =>{
    setBook (book =>{
      book ++;
      if (book > data.length -1){
    book = 0
      }
      return book;
    })
    }
    

return(
  <div>
  <div className='container'>
<h1>  {books.length} лучших книг</h1>
  </div>
  <div className='container'>
  <h2>Американский журнал «Newsweek» опубликовал рейтинг «100 лучших книг всех времен и народов». Ниже представлена первая 5ка из него:</h2>
  </div>
  {books.map((element => {
    const {id,name, image} = element;

    return(
      <div key={id}>
        <div className='container'>
<h2>{id}- {name}</h2>
        </div>
        <div className='container'>
<img src={image} width="300px"/>
        </div>
        <div className='container'>
<button onClick={() => removeBooks(id)}>Remove</button>
        </div>
      </div>
    )
  }))}
  <div className='container'> 
  <button onClick={() => setBooks([])}>delete all</button>
  </div>

   <div>
 
          <div>
      
      <div className='container'>
           <img src={image} width="400px" alt='book'/>
           </div>
            <div className='container'>
           <h1>{id}-{name}</h1>
           </div>

         
      <div className='btn container'>
      <button onClick={previousBook}>Previous</button>
      <button onClick={nextBook}>Next</button>
      </div>
          </div>
        
      
    </div> 

  </div>
        )
        
}

export default App;





