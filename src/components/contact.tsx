import MyForm from "./messageForm";

const Contact = () => {
  return (
    <>
      <div className="md:p-20 p-10 text-white" id="contact">
        <h1 className="text-3xl font-semibold text-white">contact.</h1>
        <div className="flex flex-row items-center">
          <p className="text-lg font-semibold">
            Have a question? Shoot me a message!
          </p>
        </div>
        <MyForm />
      </div>
    </>
  );
};

export default Contact;
