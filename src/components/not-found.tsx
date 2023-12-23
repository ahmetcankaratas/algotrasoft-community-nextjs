import Cover from "@/components/UI/cover";
import BackButton from "@/components/UI/back-button";
const NotFound: React.FC = () => {
    return (
        <section id="result" className="bg-gray-50 dark:bg-darkBlue">
          <Cover header="Not Found" description="404" />
          <BackButton />
        </section>
    );
};
export default NotFound;