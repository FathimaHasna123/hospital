import React from 'react'
import './doctors.css'

const Doctors = () => {
  return (
    <div className="w-full h-[140vh] flex flex-col justify-start items-center">
    <h1 className="text-[60px] text-center mt-10 poppins">Meet Our Qualified <span className="text-blue-600">Doctors</span></h1>
    <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] mt-20 px-5">
      {/* Doctor Cards */}
      <div className="card-container">
        <div className="card">
          <div className="front">
            <img className="h-[80%]"
              src="https://cdn.prod.website-files.com/627967eefc671069b0b94d33/65549131af7764a6a61a7d2f_6331648bdcb9fdb58733c921__Dr.-Alaeldin-Eltom.webp" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Aldin Powell</h1>
            <h4 className="text-[20px]">Neurologist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://cdn.prod.website-files.com/627967eefc671069b0b94d33/65549131af7764a6a61a7d2f_6331648bdcb9fdb58733c921__Dr.-Alaeldin-Eltom.webp"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Aldin Powell</h1>
           
          </div>
        </div>
      </div>
      {/* doctors2 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%]"
              src="https://lh3.googleusercontent.com/proxy/K10B3L8RzWjmfHjuLimXOfQ7pPucI2YmmFgGYJswScEPlSUTe6m3lx7NQ9LhW9Qsy8DW4ItZe3yJgXXCPL974X7AuTPI0Q" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Amanal Frond</h1>
            <h4 className="text-[20px]">Pulmonologist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://lh3.googleusercontent.com/proxy/K10B3L8RzWjmfHjuLimXOfQ7pPucI2YmmFgGYJswScEPlSUTe6m3lx7NQ9LhW9Qsy8DW4ItZe3yJgXXCPL974X7AuTPI0Q"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Amanal Frond</h1>
           
          </div>
        </div>
      </div>

      {/* doctors3 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%] w-[300px]"
              src="https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_3_2_crop_md/public/2021-11/large-Smile-Guy-web.jpg?h=6b55786a&itok=Wy7cQpYS" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Collis Molate</h1>
            <h4 className="text-[20px]">Dental Surgeon</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_3_2_crop_md/public/2021-11/large-Smile-Guy-web.jpg?h=6b55786a&itok=Wy7cQpYS"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Collis Molate</h1>
           
          </div>
        </div>
      </div>

      {/* doctors4 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%] w-[300px]"
              src="https://static.vecteezy.com/system/resources/previews/007/483/472/large_2x/a-young-doctor-woman-wears-a-lab-coat-and-stethoscope-in-hospital-free-photo.jpg" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Rashmi Shetty</h1>
            <h4 className="text-[20px]">Ophthalmologist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://static.vecteezy.com/system/resources/previews/007/483/472/large_2x/a-young-doctor-woman-wears-a-lab-coat-and-stethoscope-in-hospital-free-photo.jpg"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Rashmi Shetty</h1>
           
          </div>
        </div>
      </div>

      {/* doctors5 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%] w-[300px]"
              src="https://static.toiimg.com/photo/111533334/111533334.jpg" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600"> Rahul Bhargava</h1>
            <h4 className="text-[20px]">Cardiologist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://static.toiimg.com/photo/111533334/111533334.jpg"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]"> Rahul Bhargava</h1>
           
          </div>
        </div>
      </div>

      {/* doctors6 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%]"
              src="https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Dr.+Mounika+Jetti+-+best+female+general+physician+Hyderabad+-+good+md+general+physician+in+India-640w.jpg" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Swapna Patker</h1>
            <h4 className="text-[20px]">gynaecology</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Dr.+Mounika+Jetti+-+best+female+general+physician+Hyderabad+-+good+md+general+physician+in+India-640w.jpg"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Swapna Patker</h1>
           
          </div>
        </div>
      </div>

      {/* doctors7 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%] w-[300px]"
              src="https://media.istockphoto.com/id/522051843/photo/you-can-trust-him-with-your-healthcare.jpg?s=612x612&w=0&k=20&c=AvdnBwT8kC6XmN0M_tG5TcrwfdYYIgUSVh5pNFde7X8=" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Hari Goyal</h1>
            <h4 className="text-[20px]">Pediatrician</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://media.istockphoto.com/id/522051843/photo/you-can-trust-him-with-your-healthcare.jpg?s=612x612&w=0&k=20&c=AvdnBwT8kC6XmN0M_tG5TcrwfdYYIgUSVh5pNFde7X8="
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Hari Goyal</h1>
           
          </div>
        </div>
      </div>

      {/* doctors8 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%] w-[300px]"
              src="https://assets.lybrate.com/img/documents/doctor/dp/b81b3dcbd15b4332b343cb69d52ffd85/ChinthuMadeswaran-c6a205.jpg" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Ruby Umesh </h1>
            <h4 className="text-[20px]">Psychiatrist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://assets.lybrate.com/img/documents/doctor/dp/b81b3dcbd15b4332b343cb69d52ffd85/ChinthuMadeswaran-c6a205.jpg"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Ruby Umesh </h1>
           
          </div>
        </div>
      </div>

      {/* doctors 9 */}
      <div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%]"
              src="https://img.freepik.com/free-photo/portrait-male-doctor_23-2148480369.jpg?semt=ais_hybrid" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Domani Plavon</h1>
            <h4 className="text-[20px]">Radiologist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://img.freepik.com/free-photo/portrait-male-doctor_23-2148480369.jpg?semt=ais_hybrid"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Domani Plavon</h1>
           
          </div>
        </div>
      </div>

      {/* doctors10 */}

<div className="card-container">
      <div className="card">
          <div className="front">
            <img className="h-[80%] w-[300px]"
              src="https://img.freepik.com/premium-photo/portrait-beautiful-female-doctor-office_81724-280.jpg" alt="Doctor" />
            <h1 className="text-[28px] text-blue-600">Prerna Kohl</h1>
            <h4 className="text-[20px]">Orthodontist</h4>
          </div>
          <div className="back">
            <p className="text-[20px]">"Even the all-powerful  <br /> Pointing has no control <br /> about the blind texts  it<br /> almost unorthographic life Oneday however a small line <br />text by the name of Lorem” </p>
            <img className="rounded-full w-[50px] mt-[-40px] ml-[-250px]"
              src="https://img.freepik.com/premium-photo/portrait-beautiful-female-doctor-office_81724-280.jpg"
              alt="" />
            <h1 className="text-[20px] text-blue-600 mt-[-200px] ml-[5px]">Prerna Kohl</h1>
           
          </div>
        </div>
      </div>



    </div>
  </div>
  )
}

export default Doctors


