const SectionTitle = ({ heading, subHeading }) => {
  return (
   
      <div className="w-3/12 mx-auto text-center">
     
        <h1 className="border-y-4 border-black text-4xl font-bold">{heading}</h1>
        <p className="text-black font-bold text-orange-500">{subHeading}</p>
      </div>
   
  );
};

export default SectionTitle;
