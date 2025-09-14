import MyForm from "./messageForm";

const Contact = () => {
  return (
    <>
      <div className="p-20 text-white" id="contact">
        <h1 className="text-3xl font-semibold text-white">contact.</h1>
        <div className="flex flex-row justify-center items-center">
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
