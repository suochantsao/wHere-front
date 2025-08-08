interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
}

const Testimonial = ({ name, role, quote }: TestimonialProps) => (
  <div className="bg-gray-100 p-4 rounded shadow text-sm">
    <p className="mb-2">{quote}</p>
    <p className="font-semibold">{name}</p>
    <p className="text-gray-500">{role}</p>
  </div>
);

export default Testimonial;