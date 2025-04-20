export default function VisionMission({ vision, mission }: { vision: string; mission: string }) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Vision & Mission</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-[#1C4225]">Vision</h3>
              <p className="text-gray-700 text-lg">{vision}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-[#1C4225]">Mission</h3>
              {mission.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
