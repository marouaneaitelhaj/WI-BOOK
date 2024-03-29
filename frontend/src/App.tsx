import Book from "./pages/Book";
import Books from "./pages/Books";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { store } from "./store/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className='relative min-h-screen'>
            <Navbar></Navbar>
            <Routes>
              <Route index element={<Home />} />
              {/* <Route index element={<Books />} /> */}
              <Route path="/books" element={<Books />} />
              <Route path="/books/:bookId" element={<BookWraper />} />
            </Routes>
          </div>
        </BrowserRouter >
      </Provider>
    </>
  )
}
function BookWraper() {
  const { bookId } = useParams();
  return <Book bookId={bookId} ></Book>
}
