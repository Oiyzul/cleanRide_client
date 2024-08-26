import { Service } from "@/components";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useGetServicesQuery } from "@/redux/api/serviceApi";
import { useState } from "react";

// const servicesData = [
//   { name: 'Basic Wash', description: 'Exterior wash and dry', price: 10, duration: 15 },
//   { name: 'Deluxe Wash', description: 'Exterior wash, dry, and wax', price: 20, duration: 30 },
//   { name: 'Premium Wash', description: 'Full exterior and interior cleaning', price: 30, duration: 45 },
//   // Add more services as needed
// ];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");
  const [filterPrice, setFilterPrice] = useState("");

  const { data, isLoading } = useGetServicesQuery({});
  console.log("servicesData", data);
  console.log("isLoading", isLoading);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortType(event.target.value);
  };

  const handleFilterPrice = (event) => {
    setFilterPrice(event.target.value);
  };

  const filteredServices = data.data.length
    ? data.data
        .filter((service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((service) =>
          filterPrice ? service.price <= filterPrice : true
        )
        .sort((a, b) => {
          if (sortType === "price") {
            return a.price - b.price;
          } else if (sortType === "duration") {
            return a.duration - b.duration;
          } else {
            return a.name.localeCompare(b.name);
          }
        })
    : null;

  if (isLoading) return <div>Loading...</div>;

  return (
    <MaxWidthWrapper className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded-md"
        />
        <select
          value={sortType}
          onChange={handleSort}
          className="p-2 border rounded-md"
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="duration">Sort by Duration</option>
        </select>
        <input
          type="number"
          placeholder="Filter by max price"
          value={filterPrice}
          onChange={handleFilterPrice}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices?.map((service) => (
          <Service key={service.name} service={service} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesPage;
