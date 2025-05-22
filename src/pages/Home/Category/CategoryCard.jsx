const CategoryCard = ({ item }) => {
  const { cover, contact, desc, title } = item;

  return (
    <div className="card card-compact w-80 md:w-96 bg-base-100 shadow-xl border border-orange-400">
      <figure className="px-10 pt-10">
        <img
          src={cover}
          alt="upload"
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body min-h-48 flex flex-col justify-between">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end mt-4">
          <a href={contact} target="_blank" rel="noopener noreferrer">
            <button className="btn text-white custom-button">
              Enroll Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
