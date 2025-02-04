import { useScrollToHash } from "./hooks/useScrollToHash";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import SupportPage from "./pages/SupportPage/SupportPage";
import ImageBgCustomDesktop from '@/assets/bg-custom-desk.png';
import ImageBgCustomDesktopLayer from '@/assets/bg-custom-desk-layer.png';
import ImageBgCustomMobile from '@/assets/bg-custom-mobile.png';
import ImageBgCustomMobileLayer from '@/assets/bg-custom-mobile-layer.png';

function App() {
  useScrollToHash();
  return (
    <div className="App bg-dark-gradient min-h-screen text-white relative">
      <div className="absolute top-0 left-0 right-0 z-0">
        <img className="sm:hidden xs:block w-full" src={ImageBgCustomDesktopLayer} alt="bg" />
        <img className="xs:hidden w-full" src={ImageBgCustomMobileLayer} alt="bg" />
      </div>
      <div className="absolute flex justify-center top-0 left-0 right-0 z-0">
        <img className="sm:hidden xs:block" src={ImageBgCustomDesktop} alt="bg" />
        <img className="xs:hidden" src={ImageBgCustomMobile} alt="bg" />
      </div>
      <Header />
      <main id="main" className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      <Footer />
      <div className="custom-bg-bottom absolute left-0 right-0 bottom-0 h-[35rem] bg-[url('./assets/footer-bg-image.png')] bg-no-repeat bg-[length:100%]"></div>
    </div>
  )
}

export default App
