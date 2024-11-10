import './globals.css'
import Footer from '../../components/Footer';
import ProductSection from '../../components/ProductSection';

export default function Home(){
  return(
    <div className="container">
      <div className="hero-image">
      </div>
      
      <ProductSection />
      <Footer />
    </div>
);
  
}