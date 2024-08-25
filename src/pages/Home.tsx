import { Branding, Featured, Footer, Review } from "@/components";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Branding />
      <Button>Call to action</Button>
      <Featured />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
