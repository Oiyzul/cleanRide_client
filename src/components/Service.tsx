const Service = ({ service }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
      <p className="mb-2">{service.description}</p>
      <p className="mb-2">Price: ${service.price}</p>
      <p>Duration: {service.duration} mins</p>
    </div>
  );
};

export default Service;
