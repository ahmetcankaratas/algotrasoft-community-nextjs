import { useRouter } from "next/router";

const BackButton: React.FC = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <div className="container mx-auto mb-10 w-full px-6 md:max-w-2xl">
      <button
        className="text-md mt-2 w-full cursor-pointer rounded-xl bg-gray-300 p-3 text-center hover:bg-darkCyan dark:bg-darkBlue1 dark:hover:bg-accentCyan md:max-w-2xl md:text-lg"
        onClick={goBack}
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
