import { ArrowBigRightDash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./../ui/card";

const ServiceCard = ({ _id, name, description, imgUrl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <img src={imgUrl} alt="" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={`/services/${_id}`}>
            <ArrowBigRightDash className="mr-2 h-4 w-4" /> View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
