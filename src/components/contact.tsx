import MyForm from "./messageForm";

const Contact = () => {
  return (
    <>
      <div className="md:p-20 p-10 text-white" id="contact">
        <div className="md:mx-20">
          <span className="block font-mono text-xs tracking-[0.3em] text-white/40 mb-3">
            03 &mdash;
          </span>
          <h1 className="font-sans font-medium  tracking-tight text-5xl text-white">
            contact.
          </h1>
        </div>

        <MyForm />
      </div>
    </>
  );
};

export default Contact;
