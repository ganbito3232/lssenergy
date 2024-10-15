import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeApp from "./pages/home/homeBody";
import OngridApp from "./pages/onGrid/onGridApp";
import OffgridApp from "./pages/offGrid/offGridApp";
import HibridoApp from "./pages/hibrido/hibridoApp";
import MantencionApp from "./pages/matencion/matencionApp";
import NavBar from "./components/navBar";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Footer from "./components/footer";
import "./index.css";

// Configuración de las rutas
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeApp />} />
    <Route path="/on-grid" element={<OngridApp />} />
    <Route path="/off-grid" element={<OffgridApp />} />
    <Route path="/hibrido" element={<HibridoApp />} />
    <Route path="/mantenciones" element={<MantencionApp />} />
    <Route path="/*" element={<HomeApp />} />
  </Routes>
);

// Componente principal App
const App = () => (
  <Router>
    <NavBar />
    <AppRouter />
    <Footer />
    <WhatsAppWidget
      replyTimeText=""
      companyName="LSS Energy Solar"
      message={
        "¡Saludos! ¿Hay alguna pregunta o información que estés buscando?"
      }
      phoneNumber="+56977988513"
      sendButtonText="Enviar Mensaje"
      inputPlaceHolder="Escribe tu mensaje aquí..."
    />
  </Router>
);

export default App;
