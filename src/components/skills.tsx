export function Skills() {

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Professional Experience */}
      <div className="justify-self-center max-w-sm">
        <div className="font-sans text-3xl font-semibold leading-[3] text-blue-gray-900">
          Professional Experience
        </div>
        <div className="border-l-2 border-teal-500 pl-6 space-y-8">
          <div>
            <h3 className="font-bold pb-1">
              CLINICAL AFFAIRS ASSOCIATE
            </h3>
            <div className="font-semibold">
              be-on-Quality GmbH
            </div>
            <div className="font-bold text-sm text-gray-800">Oct 2024 - Present</div>
            <div className="italic text-sm pb-2">
              Neunkirchen am Sand, Bavaria, Germany · Hybrid
            </div>
            <ul className="list-disc pl-4 mt-2 text-sm text-gray-600">
              <li>Clincial evaluation and medical documents assistance.</li>
            </ul>
          </div>


          <div>
            <div className="font-bold pb-1">
              Assistant Project Coordinator
            </div>
            <div className="font-semibold">
              Apr 2024 - Sep 2024
            </div>
            <div className="font-bold text-sm text-gray-800">Quantitas srl · Internship</div>
            <div className="italic text-sm pb-2">
              Venice, Veneto, Italy · Remote
            </div>
            <ul className="list-disc pl-4 mt-2 text-sm text-gray-600">
              <li>Telerehab DSS project coordinator</li>
              <li>AI Impact Assessmentr</li>
            </ul>
          </div>
          <div>
            <div className="font-bold pb-1">
              Online doctor
            </div>
            <div className="font-semibold">
              Apr 2024 - Sep 2024
            </div>
            <div className="font-bold text-sm text-gray-800">Maids.cc · Full-time</div>
          </div>
        </div>
      </div>


      <div className="justify-self-center max-w-sm">
        {/* Education Section */}
        <div className="font-sans text-3xl font-semibold leading-[3] text-blue-gray-900">
          Education
        </div>
        <div className="border-l-2 border-teal-500 pl-6 space-y-8">
          <div>
            <div className="font-bold">
              Università Cattolica del Sacro Cuore
            </div>
            <div className="font-semibold">
              Master's degree, Health/Health Care Administration/Management
            </div>
            <div className="font-bold text-sm text-gray-800">Sep 2022 - Sep 2024</div>
          </div>
          <div>
            <div className="font-bold">
              IESE Business School
            </div>
            <div className="font-semibold">
              Summer School, Digital Medical Devices
            </div>
            <div className="font-bold text-sm text-gray-800">Jul 2023 - Jul 2023</div>
            <div className="font-normal text-sm text-gray-600">Learning how to create innovative solutions
              in Digital Medical Devices, and how to innovate in healthcare provision and delivery, while focusing on patient care and vlaue based solutions.</div>
            <div className="font-normal text-sm text-gray-600">The program included one week in the University of Luxembourg, and one week in Barcelona.</div>
          </div>
          <div>
            <div className="font-bold">
              American University of Beirut
            </div>
            <div className="font-semibold">
              Clinical Training, Internal Medicine Residency Program
            </div>
            <div className="font-bold text-sm text-gray-800">Aug 2021 - Sep 2021</div>
            <div className="font-normal text-sm text-gray-600">The training was held at the AUB Medical Center in the department of
              Pulmonary diseases, under the supervision of Prof. Kanj.</div>
          </div>
          <div>
            <div className="font-bold">
              Jami't Al-Ba'ath
            </div>
            <div className="font-semibold">
              Doctor of Medicine - MD, General Studies
            </div>
            <div className="font-bold text-sm text-gray-800">2015 - 2021</div>
            <ul className="list-disc pl-4 mt-2 text-sm text-gray-600">
              <li>Medical Affairs</li>
              <li>Clinical Trials</li>
              <li>Medical Writing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
