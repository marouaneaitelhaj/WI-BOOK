import Book from "./pages/Book";
import Books from "./pages/Books";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className='relative'>
          <img className='fixed brightness-50 -z-10 w-screen object-cover h-screen' src="https://img.freepik.com/premium-vector/book-large-book-pattern-white-black_718551-278.jpg?w=740" alt="" />
          {/* <Navbar /> */}
          <Routes>
            <Route index element={<Books />} />
            <Route path="/:bookId" element={<BookWraper />} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
  )
}
function BookWraper() {
  const { bookId } = useParams();
  return <Book bookId={bookId} ></Book>
}
