// Utils
import { motion } from "framer-motion";
import useDocTitle from "../../hooks/useDocTitle";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer";
import RestoreScroll from "../../components/RestoreScroll";

export default function Home() {
  useDocTitle("Home");

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <RestoreScroll />

      <Header />

      <Main />

      <Footer />
    </motion.div>
  );
}
