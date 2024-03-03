import { offer } from '../assets/images'
import { Button } from '../components'

const SpecialOffer = () => {
  return (
    <section className="flex gap-10 justify-center items-center max-container max-xl:flex-col-reverse">
      <div className="flex-1">
        <img className="object-contain w-full" src={offer} alt="Special Offer" height="687" width="773" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="capitalize font-bold font-palanquin text-4xl lg:max-w-lg">
          <span className="text-rolex-green">Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">Step into luxury with our exclusive <strong>Special Offer</strong> at the Rolex boutique! Indulge in the timeless elegance and unparalleled craftsmanship of Rolex timepieces with an irresistible deal crafted just for you. Whether You are seeking the perfect statement piece or looking to elevate your collection, our curated selection of watches awaits, each embodying the essence of precision and prestige.</p>
        <p className="mt-6 info-text lg:max-w-lg">From complimentary servicing to personalized consultations, our team is dedicated to ensuring your journey with Rolex is nothing short of extraordinary.</p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="View Details" />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer