import MyForm from "./messageForm";

const Contact = () => {
  return (
    <>
      <div className="p-20 text-white" id="contact">
        <h1 className="text-2xl font-semibold text-white">Contact me</h1>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-semibold">
            Have a question? Shoot me a message!
          </p>
        </div>
        <MyForm />
      </div>
      <hr className="border-t border-2 border-neutral-900 my-4 w-[90%] mx-auto" />
    </>
  );
};

export default Contact;
