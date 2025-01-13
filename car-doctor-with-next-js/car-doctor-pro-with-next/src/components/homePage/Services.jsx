import SectionTitle from "../shared/SectionTitle";
import { services } from "../../lib/Services";
import ServiceCard from "../Cards/ServiceCard";

const Services = () => {
  return (
    <div className="text-slate-800 container mx-auto">
      <SectionTitle />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
