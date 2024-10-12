import { ComparisonTable, MaxWidthWrapper, ServiceCardWithCompare } from "@/components";
import { useGetServicesQuery } from "@/redux/features/services/serviceApi";
import { useState } from "react";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("name");
  const [filterPrice, setFilterPrice] = useState("");
  const [selectedServices, setSelectedServices] = useState<TService[]>([]);

  const { data = [], isLoading } = useGetServicesQuery({});
  console.log("servicesData", data);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  const handleFilterPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterPrice(event.target.value);
  };

  const filteredServices = data?.data?.length
    ? data.data
        .filter((service: TService) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((service: any) =>
          filterPrice ? service.price <= filterPrice : true
        )
        .sort((a: any, b: any) => {
          if (sortType === "price") {
            return a.price - b.price;
          } else if (sortType === "duration") {
            return a.duration - b.duration;
          } else {
            return a.name.localeCompare(b.name);
          }
        })
    : null;

  const handleServiceCompare = (service: TService) => {
    setSelectedServices((prevServices) => {
      if (prevServices.includes(service)) {
        return prevServices.filter((s) => s._id !== service._id);
      } else {
        return [...prevServices, service];
      }
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <MaxWidthWrapper className="mt-5 mb-10">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="mb-2 flex flex-col md:flex-row gap-4">
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
      <div className="py-4">
        <h1 className="text-xl font-bold mb-1">Compare CleanRide Services</h1>
        <ComparisonTable selectedServices={selectedServices} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10 xl:gap-20">
        {filteredServices?.map((service: TService) => (
          <ServiceCardWithCompare
            key={service._id}
            service={service}
            onSelect={handleServiceCompare}
            selected={selectedServices.includes(service)}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesPage;
