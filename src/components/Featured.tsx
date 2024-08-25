import { useGetServicesQuery } from "@/redux/api/serviceApi";

const Featured = () => {
  const { data, error } = useGetServicesQuery({});
  console.log(data.data, error);
  return <div>Featured</div>;
};

export default Featured;
