import products from './products.json';
import SimpleSlider from './components/SimpleSlider'
import Products from './components/Products';
import Header from './components/Header';
export default function App() {

  console.log(products)
  return <div className="">
    <section>
      <div className="max-w-5xl mx-auto">
        <SimpleSlider />
      </div>
    </section>
    <section className='py-10'>
      <div className="max-w-7xl mx-auto">
        <Products title="Smartphone" />
      </div>
    </section>

    <section className='py-10'>
      <div className="max-w-7xl mx-auto">
        <Products title="Laptop" />
      </div>
    </section>

    <section className='py-10'>
      <div className="max-w-7xl mx-auto">
        <Products title="Accessories" />
      </div>
    </section>
  </div>
}