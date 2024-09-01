const ComparisonTable = ({
  selectedServices,
}: {
  selectedServices: TService[];
}) => {
  if (selectedServices.length < 2) {
    return <p>Select at least two services to compare.</p>;
  } else if (selectedServices.length > 5){
      return <p>Maximum of 5 services can be compared at a time.</p>;
  }

  return (
    <table className="min-w-full bg-gray-900 text-white">
      <thead>
        <tr>
          <th className="py-2 border">Feature</th>
          {selectedServices.map((service) => (
            <th key={service._id} className="py-2 border">
              {service.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Price</td>
          {selectedServices.map((service) => (
            <td key={service._id} className="border px-4 py-2">
              ${service.price}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">Duration</td>
          {selectedServices.map((service) => (
            <td key={service._id} className="border px-4 py-2">
              {service.duration} mins
            </td>
          ))}
        </tr>
        <tr>
          <td className="border px-4 py-2">Features</td>
          {/* {selectedServices.map((service) => (
            <td key={service._id} className="border px-4 py-2">
              {service?.features?.join(", ")}
            </td>
          ))} */}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
