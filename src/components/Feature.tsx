

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-1 hover:text-black text-red-600">
          Tech Chronicals: Navigating the secrets of the tech world !
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          dolores, deleniti ex velit perspiciatis facilis deserunt qui nulla
          quibusdam beatae odio officia unde repellat asperiores aspernatur
          nisi. Error assumenda aperiam quidem incidunt iusto iste ducimus
          deleniti expedita repudiandae. Et tempore eius ex nemo facilis velit
          voluptatem impedit earum modi alias.
        </p>

        <div className="max-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            {" "}
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
                "Technology",
                "Artificial Intelligence",
                "Virtual Reality",
                "Next Js",
                "Web Development",
            ].map((category, index) => (
                <div key={index} className="relative group bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center p-2 text-neutral-600">
                    <p className="text-center text-lg font-semibold">{category}</p>
                </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-up delay-100 mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellat, fuga ullam architecto quod eum excepturi accusamus nemo, minima dolorum aut consequatur distinctio! Sapiente repudiandae in voluptas maiores deleniti, praesentium nesciunt mollitia eos, architecto placeat, qui possimus suscipit exercitationem incidunt dolorem corporis a laboriosam fugiat et necessitatibus amet recusandae! Illum!
        </p>
      </section>
    </div>
  );
}
