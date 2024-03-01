import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-bold font-palanquin text-4xl">Our <span className="text-rolex-green">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.</p>
      </div>
      <div className="gap-14 grid grid-cols-1 mt-16 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts