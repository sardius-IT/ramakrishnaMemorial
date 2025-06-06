// app/components/Services.js
const services = [
  {
    title: "Maternity & Women’s Health (Normal Deliveries)",
    description: "Safe and supportive care for natural childbirth, ensuring the health of both mother and baby.",
  },
  {
    title: "Cesarean (C-section) Deliveries",
    description: "Specialized surgical childbirth procedures prioritizing maternal and newborn safety.",
  },
  {
    title: "Uterus Operations",
    description: "Advanced surgical interventions for conditions like fibroids, endometriosis, and uterine abnormalities.",
  },
  {
    title: "Cryotherapy for Uterine Conditions",
    description: "Minimally invasive cold therapy used to treat cervical and uterine tissue abnormalities.",
  },
  {
    title: "Pediatric Care (Newborn and Child Healthcare)",
    description: "Comprehensive medical care for infants, children, and adolescents from birth through early adulthood.",
  },
  {
    title: "In-house Intensive Care Unit (ICU)",
    description: "24/7 critical care unit equipped to manage life-threatening conditions with advanced monitoring and treatment.",
  },
  {
    title: "Diagnostics & Support (Ultrasound Scanning)",
    description: "Accurate imaging services to monitor fetal health and diagnose a variety of gynecological and abdominal issues.",
  },
  {
    title: "Support for Children with Complex Health Needs",
    description: "Individualized care plans and long-term support for children with chronic or rare medical conditions.",
  },
  {
    title: "Intensive Pediatric Care",
    description: "Specialized care for critically ill infants and children requiring constant monitoring and intervention.",
  },
  {
    title: "Jaundice Treatment (Phototherapy)",
    description: "Effective light therapy for managing newborn jaundice and preventing complications.",
  },
  {
    title: "Prenatal & Postnatal Care Guidance",
    description: "Expert guidance and healthcare support before, during, and after childbirth for both mother and child.",
  },
];


export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-950">
      <div className="container mx-auto text-center">
        <h3 className="text-7xl font-semibold text-blue-200 mb-10">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 shadow-2xs  rounded-2xl  hover:shadow-lg hover:shadow-blue-500 bg-white "
            >
              <h4 className="text-xl font-bold text-yellow-500">
                {service.title}
              </h4>
              <p className="text-gray-600 mt-2 ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
