// import { useState } from 'react';

// import ServiceCard from './ServiceCard';
// import ComparisonTable from './ComparisonTable';

// const ServiceSelector = ({ services }:{services:TService[]}) => {
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleSelect = (service:TService) => {
//     setSelectedServices(prev => {
//       if (prev.find(s => s?._id === service._id)) {
//         return prev.filter(s => s?._id !== service._id);
//       }
//       return [...prev, service];
//     });
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {services.map((service:TService) => (
//           <ServiceCard key={service._id} service={service} onSelect={handleSelect} />
//         ))}
//       </div>
//       <ComparisonTable selectedServices={selectedServices} />
//     </div>
//   );
// };

// export default ServiceSelector;
