const CategoryCard = ({ item }) => {
  const { cover,contact,desc,title} = item;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={cover} alt="upload" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end pb-5">
        <a href={contact}><button className="btn btn-primary">Enroll Now</button></a>
          
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
