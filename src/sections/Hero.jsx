import { useState } from 'react'
import Button from '../components/Button'
import WatchCard from '../components/WatchCard'
import { arrowRight } from '../assets/icons'
import { watches, statistics } from '../constants'
import { bigWatch1 } from '../assets/images'

const Hero = () => {
  const [heroWatchImg, setHeroWatchImg] = useState(bigWatch1)

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className="text-xl font-montserrat text-rolex-green">The Challenge of Excellence</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-10">New 2023 Arrival</span>
          <span className="text-rolex-green inline-block mt-3">Rolex</span>
          <span className="xl:bg-white"> Watches&nbsp;</span>
        </h1>
        <p className="font-montserrat leading-8 mb-14 mt-6 text-lg text-slate-gray sm:max-w-sm">With its latest creations, Rolex demonstrates its perpetual pursuit of excellence</p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map(stat => (
            <div key={stat.label}>
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative max-xl:py-40 bg-primary bg-hero bg-cover bg-center xl:min-h-screen">
        <img className="object-contain relative z-10" src={heroWatchImg} alt="Watches Collection" height="600" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {watches.map((watch, i) => (
            <div key={i}>
              <WatchCard imgURL={watch} changeHeroWatchImage={watch => setHeroWatchImg(watch)} heroWatchImg={heroWatchImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Hero