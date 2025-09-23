
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArrivals from '../components/Products/NewArrivals'
import Productdetails from '../components/Products/Productdetails'

const Home = () => {
  return (
    <div>
      <Hero/>
      <GenderCollection/>
      <NewArrivals/>
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
      <Productdetails/>

    </div>
  )
}

export default Home