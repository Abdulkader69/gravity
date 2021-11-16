import Partners from '../src/components/Partners';
import AuditsReviews from '../src/components/AuditsReviews';
import Silos from '../src/components/Silos';

function Home() {
  return (
    <div className="home-page-wrapper pt-44">
      <Silos />
      <AuditsReviews />
      <Partners />
    </div>
  )
}
export default Home;