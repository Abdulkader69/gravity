import Partners from '../src/components/Partners';
import AuditsReviews from '../src/components/AuditsReviews';
import Silos from '../src/components/Silos';
import DefiProjects from '../src/components/DefiProjects';
import Statistics from '../src/components/Statistics';
import HeroSection from '../src/components/HeroSection';

function Home() {
  return (
    <div className="home-page-wrapper overflow-hidden">
      <HeroSection />
      <Statistics />
      <DefiProjects />
      <Silos />
      <AuditsReviews />
      <Partners />
    </div>
  )
}
export default Home;