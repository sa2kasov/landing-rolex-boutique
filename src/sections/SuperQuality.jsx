import { arrowRight } from '../assets/icons/index.js'
import Button from '../components/Button'
import { watch8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className="flex gap-10 justify-between items-center max-container w-full max-lg:flex-col" id="about-us">
      <div className="flex flex-1 flex-col">
        <h2 className="capitalize font-palanquin font-bold text-4xl lg:max-w-lg">We Provide You <span className="text-rolex-green">Super Quality</span> Shoes</h2>
        <p className="info-text mt-4 lg:max-w-lg">The design, development and production of Rolex bracelets and clasps, as well as the stringent tests they face, involve advanced high technology.</p>
        <p className="info-text mt-6 lg:max-w-lg">The dial is the distinctive face of a Rolex watch, the feature most responsible for its identity and readability. Characterised by hour markers fashioned from gold to prevent tarnishing, every Rolex dial is designed and manufactured in-house, largely by hand to ensure perfection.</p>
        <div className="mt-11">
          <Button label="View Details" iconUrl={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img className="object-contain" src={watch8} alt="Watch8" height="522" width="570" />
      </div>
    </section>
  )
}

export default SuperQuality