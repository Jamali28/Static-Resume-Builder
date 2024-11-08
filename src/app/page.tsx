import Footer from "./components/Footer";

export default function Home() {
  return (
  
      <div className="bg-slate-200">
    <div className="min-h-screen p-8  ">
      <h1 className="my-8  text-5xl font-bold  items-center border-2 border-gray-500  justify-center">Static Resume Builder</h1>

      <div className="flex flex-col md:flex-row gap-8">
        
        <div className="flex-1 space-y-6 ">
          
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              name="summary"
              placeholder="Summary"
             
              className="w-full p-2 mb-2 border rounded"
            ></textarea>
          </div>

          
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
           
              <div className="space-y-2 mb-4">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  
                 
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="duration"
                  placeholder="Duration"
        
                  className="w-full p-2 border rounded"
                />
              </div>
            
            <button
              
              className="text-blue-500 hover:text-blue-700"
            >
              + Add Experience
            </button>
          </div>

          
          <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            
              <div className="space-y-2 mb-4">
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
               
                  
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="year"
                  placeholder="Year of Graduation"
               
                  className="w-full p-2 border rounded"
                />
                 <button
              
              className="text-blue-500 hover:text-blue-700"
            >
              + Add Education
            </button>
              </div>
            
            </div>
            <div> 
              
            <button className="  bg-blue-500 text-white font-semibold py-2 px-8 rounded w-x-5 hover:bg-blue-600 transition">
                 Submit
               </button>
               
       </div>


            <button
              
              className="text-red-500 hover:text-blue-700 test-lg"
            >
              Ask Questions !?
            </button>
        </div>
        </div>
        

     </div>
     <Footer />
    </div>
  );
}
