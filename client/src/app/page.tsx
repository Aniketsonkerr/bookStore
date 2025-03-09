import BookList from "./components/Booklist";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <BookList />
      </main>
      <Footer />
    </div>
  );
}
