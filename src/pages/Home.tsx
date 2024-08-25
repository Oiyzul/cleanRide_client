import { Branding, Featured, Footer, Review } from "@/components";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
  

  <section className="hero bg-gray-100 text-center py-24">
    <h1 className="text-4xl font-bold">Experience the Ultimate Car Wash</h1>
    <p className="text-gray-500 mt-4">Keep your car looking its best with our professional services.</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Book Now</button>
  </section>

  <section className="featured-services bg-white p-8">
    <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
    <div className="grid grid-cols-3 gap-4">
      </div>
  </section>

  <section className="reviews bg-gray-100 p-8">
    <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
    <div className="review-form">
      </div>
    <div className="overall-rating">
      </div>
    <div className="recent-reviews">
      </div>
    <a href="#" className="text-blue-500">See All Reviews</a>
  </section>

  <footer className="bg-gray-800 text-white py-4">
    <p>&copy; 2023 Car Wash Service</p>
  </footer>
</div>
    </div>
  );
};

export default Home;
