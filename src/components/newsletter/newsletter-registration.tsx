// pages/signup.js
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/UI/loader";

const NewsletterRegistration: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error || message) {
      const timer = setTimeout(() => {
        setError(null);
        setMessage(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error, message]);

  const signUpEmail = async (email: string) => {
    setIsLoading(true);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Something went wrong!");
    } else {
      setMessage(data.message);
    }
    setIsLoading(false);
    return data;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (enteredEmail && emailRegex.test(enteredEmail)) {
    await signUpEmail(enteredEmail);
  } else {
    setError("Please enter a valid email address.");
  }
  };

  return (
    <section className="bg-gray-50  dark:bg-gray-900 mx-auto max-w-4xl">
      <div className="py-8 px-4">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <form onSubmit={handleSubmit}>
          {isLoading && <div className="justify-center mb-3 space-y-4 size-full sm:flex sm:space-y-0">
            <Loader />
            </div>}
          {!isLoading &&
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                  ref={emailInputRef}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
}
          </form>
        </div>
      </div>

      {error && (
          <div className="rounded-lg bg-red-300 max-w-l px-5 py-2.5 text-center text-sm font-medium text-white">
            <p>{error}</p>
          </div>
        )}
        {message && (
          <div className="rounded-lg bg-green-300 max-w-l px-5 py-2.5 text-center text-sm font-medium text-white ">
            <p>{message}</p>
          </div>
        )}
    </section>
  );
};

export default NewsletterRegistration;
