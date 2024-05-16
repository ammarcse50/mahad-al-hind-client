
const Profile = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
 <form className="card-body w-full lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ReType Password</span>
          </label>
          <input type="password" placeholder="ReType password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Your Image</span>
          </label>
          <input type="file"   />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn text-xl text-white bg-[#e58106]">Save Change</button>
        </div>
      </form>
</div>
    );
};

export default Profile;