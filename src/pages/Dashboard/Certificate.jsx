import { useQuery } from "@tanstack/react-query";
import { TbFileCertificate } from "react-icons/tb";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import useAuth from "../../components/Hooks/useAuth";

const Certificate = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: certificate = [] } = useQuery({
    queryKey: ["certificate"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/certificate/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="">
      {" "}
      <div className="">
        <h2 className="text-center text-4xl font-bold">
          {user?.displayName} Your Certificate
        </h2>
        <a
          title="certificate"
          download={true}
          href={certificate?.image}
          className="btn bg-orange-500 text-white"
        >
          <TbFileCertificate size={50} className="text-center text-black" />{" "}
          Download
        </a>
      </div>
      <img src={certificate?.image} id="imageSrc" alt="Complete Your Course " />
    </div>
  );
};

export default Certificate;
