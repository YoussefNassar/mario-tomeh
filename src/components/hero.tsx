function Hero() {
    return (
        <div className="md:flex flex-row-reverse items-center gap-x-20 space-y-14 md:space-y-0 text pb-20">
            <img src="/Mario1.jpeg" className="w-full md:w-1/2 rounded-lg" alt="Mario image"/>
            <div className="flex flex-col items-start gap-4 justify-center">
                <h3 className="text-5xl font-semibold">Clincial Affairs Specialist</h3>
                <p className="text-lg/8 text-gray-600">I'm a Clinical Affairs Specialist at be-on-Quality,
                    where I support clinical activities to ensure compliance and product safety.
                    With a background in research and quality, I help bridge clinical data and regulatory standards.
                    I'm passionate about advancing healthcare through strong clinical oversight.
                </p>
            </div>
        </div>
    );
}

export default Hero;
