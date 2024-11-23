import { useForm } from "react-hook-form";

function App() {
  const { 
    register, 
    handleSubmit, 
    reset, 
    // watch, 
    formState: { errors } 
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "India",
      city: "",
      streetAddress: "",
      state: "",
      zipCode: "",
      comments: false,
      candidates: false,
      offers: false,
      notificationType: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Resets form to default values
  };

  // const notificationType = watch("notificationType"); // Watch specific field

  return (
    <div className="App bg-gray-400 w-[100vw] flex justify-center py-10">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-[60%] border-black border rounded-md py-5 px-8 bg-white"
      >
        {/* First Name */}
        <label htmlFor="firstName">First Name</label>
        <input
          {...register("firstName", { required: "First name is required" })}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="text"
          placeholder="Type here"
          id="firstName"
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

        {/* Last Name */}
        <label htmlFor="lastName">Last Name</label>
        <input
          {...register("lastName")}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="text"
          placeholder="Type here"
          id="lastName"
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { 
            required: "Email is required", 
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="email"
          placeholder="Type here"
          id="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Country */}
        <label htmlFor="country">Country</label>
        <select
          {...register("country")}
          id="country"
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Dubai">Dubai</option>
          <option value="Paris">Paris</option>
        </select>

        {/* Address Fields */}
        <label htmlFor="streetAddress">Street Address</label>
        <input
          {...register("streetAddress")}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="text"
          placeholder="Type here"
          id="streetAddress"
        />

        <label htmlFor="city">City</label>
        <input
          {...register("city")}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="text"
          placeholder="Type here"
          id="city"
        />

        <label htmlFor="state">State/Province</label>
        <input
          {...register("state")}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="text"
          placeholder="Type here"
          id="state"
        />

        <label htmlFor="zipCode">Zip/Postal Code</label>
        <input
          {...register("zipCode")}
          className="w-full px-2 py-2 border-black border rounded-md mt-4"
          type="text"
          placeholder="Type here"
          id="zipCode"
        />

        {/* Email Notifications */}
        <fieldset>
          <legend className="mt-2 mb-4 font-semibold">By Email</legend>
          <div>
            <input 
              type="checkbox" 
              {...register("comments")} 
              id="comments" 
              className="mt-3 cursor-pointer"
            />
            <label className="ml-3 font-medium cursor-pointer" htmlFor="comments">
              Comments
            </label>
            <p className="ml-6 text-gray-700">
              Get notified when someone posts a comment on a posting.
            </p>
          </div>

          <div>
            <input 
              type="checkbox" 
              {...register("candidates")} 
              id="candidates" 
              className="mt-3 cursor-pointer"
            />
            <label className="ml-3 font-medium cursor-pointer" htmlFor="candidates">
              Candidates
            </label>
            <p className="ml-6 text-gray-700">
              Get notified when a candidate applies for a job.
            </p>
          </div>

          <div>
            <input 
              type="checkbox" 
              {...register("offers")} 
              id="offers" 
              className="mt-3 cursor-pointer"
            />
            <label className="ml-3 font-medium cursor-pointer" htmlFor="offers">
              Offers
            </label>
            <p className="ml-6 text-gray-700">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </fieldset>

        {/* Push Notifications */}
        <fieldset className="mt-3 font-medium">
          <legend>Push Notifications</legend>
          <p className="text-gray-700">
            These are delivered via SMS to your mobile phone.
          </p>

          {["Everything", "Same as email", "No push notifications"].map((option) => (
            <div key={option}>
              <input
                type="radio"
                value={option}
                {...register("notificationType")}
                id={option}
                className="mt-4 cursor-pointer"
              />
              <label className="font-medium ml-3 cursor-pointer" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </fieldset>

        <button 
          type="submit" 
          className="text-white bg-blue-600 font-bold px-4 py-2 rounded mt-3"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
