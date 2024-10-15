import React from 'react';
import { useParams } from 'react-router-dom';
import servicesdetails from '../Components/servicedata';
import PageIndicator from '../Components/PageIndicator';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log('Service ID:', serviceId); // Check the serviceId

  // Find the service by ID, converting serviceId to a string for comparison
  const service = servicesdetails.find((s) => s.id.toString() === serviceId);
  console.log('Found Service:', service); // Check the found service

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (

    <>
       <PageIndicator text={'Our Service'} />
  
    <div className="p-8">
      <h2 className="text-3xl font-bold">{service.title}</h2>
      <p className="mt-4">{service.description}</p>
    </div>
    </>
  );
};

export default ServiceDetail;
