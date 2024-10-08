import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HeroesList from "./components/HeroesList/HeroesList";
import TierList from "./components/TierList/TierList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="content-box">
        <Header />
        <TierList />
        <HeroesList />
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;
