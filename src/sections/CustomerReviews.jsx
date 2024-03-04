import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">What Our <span className="text-rolex-green">Customers</span> Say?</h3>
      <p className="info-text max-w-lg m-auto mt-4 text-center">Listen to authentic testimonials from our delighted customers as they share their extraordinary experiences with our services.</p>
      <div className="gap-14 flex flex-1 justify-evenly items-center mt-24 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews