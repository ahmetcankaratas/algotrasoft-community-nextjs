import Cover from "@/components/UI/cover";
import Info from "@/components/info";
const Contact: React.FC = () => {
  return (
      <section id="contact" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header="Contact" description="Join Us" />
        <Info />
      </section>
  );
};

export default Contact;
