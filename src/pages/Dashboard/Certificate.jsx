import { TbFileCertificate} from "react-icons/tb";

const Certificate = () => {
  return (
    <div>
      {" "}
      <div className="">
        <h2 className="text-center text-4xl font-bold">Your Certificate</h2>

        <a
          href="https://i.ibb.co/tYXDfG3/BLANK-CERTIFICATE.jpg"
          title="certificate"
          className="btn bg-orange-500 text-white"
        >
          <TbFileCertificate size={50} className="text-center text-black" />{" "}
          Download
        </a>
      </div>
      <img
        src={`https://i.ibb.co/tYXDfG3/BLANK-CERTIFICATE.jpg`}
        alt="Complete Your Course "
      />
    </div>
  );
};

export default Certificate;
