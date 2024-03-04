import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center" key={customerName}>
      <img className="h-[120px] object-cover rounded-full w-[120px]" src={imgURL} alt={customerName} height="120" width="120" />
      <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
      <div className="gap-2.5 flex items-center justify-center mt-3">
        <img className="m-0 object-contain" src={star} alt="Rating" height="24" width="24" />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="font-bold font-palanquin mt-1 text-3xl text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard