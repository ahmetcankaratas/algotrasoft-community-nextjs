import Layout from "../components/layout/layout";
import Cover from "../components/UI/cover";
import Info from "../components/info";
const Contact: React.FC = () => {
  return (
    <Layout>
      <section id="contact" className="bg-gray-50 dark:bg-darkBlue">
        <Cover header="Contact" description="Join Us" />
        <Info />
      </section>
    </Layout>
  );
};

export default Contact;
