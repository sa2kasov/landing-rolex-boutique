import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="h-[280px] w-[280px]" src={imgURL} alt={name}/>
      <div className="gap-2.5 flex justify-start mt-8">
        <img src={star} alt="Rating" height="24" width="24" />
        <p className="font-montserrat leading-normal text-xl text-slate-gray">(4.9)</p>
      </div>
      <h3 className="font-palanquin font-semibold leading-normal mt-2 text-xl">{name}</h3>
      <p className="font-montserrat font-semibold leading-normal mt-2 text-rolex-green text-2xl">{price}</p>
    </div>
  )
}
export default PopularProductCard