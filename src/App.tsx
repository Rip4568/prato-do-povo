import { Layout } from "./components/layout/Layout";
import { Landing } from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
