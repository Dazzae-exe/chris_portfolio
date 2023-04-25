import { useRouteError } from "react-router-dom";

function ErrorPage() {
  let error = useRouteError();
  console.error(error);

  return (
    <section className="max-w-full max-h-screen">
      <div className="container mx-auto h-screen w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl">{error.statusText || error.message}</h2>
        <p>Sorry where are you going?</p>
      </div>
    </section>
  );
}

export default ErrorPage;
