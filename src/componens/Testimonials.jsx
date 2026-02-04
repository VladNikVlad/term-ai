const testimonials = [
  {
    name: "John Konnor",
    role: "Senoir pomidore",
    image: "https://c7.alamy.com/comp/K388TF/terminator-2-judgement-day-edward-furlong-as-john-connor-date-1991-K388TF.jpg",
    content: "Now don't take this the wrong way, but you are a terminator, right?"
  },
  {
    name: "Sarah Connor",
    role: "Mather Senoira pomidore",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_%28Linda_Hamilton%29.jpg",
    content: "The first terminator was programmed to strike at me, in the year 1984... before John was born. It failed."
  },
  {
    name: "Terminator",
    role: "Senoir robot AI",
    image: "https://posterspy.com/wp-content/uploads/2024/09/40TH-Anniversary-Terminator-Terminator-Dark-Fate-Grievity.jpg",
    content: "I need your clothes, your boots, and your motorcycle."
  },
]


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-8 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/*Left side */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:md-6">
              What would you rather do, fight AI or help AI?
            </h2>
            <p className="text-gray-400 text-xl sm:Text-lg max-w-2xl mx-auto">
              Skynet, the computer which controlled the machines,
              sent two terminators back through time.  Their
              mission: to destroy the leader of the human
              Resistance... John Connor.
            </p>
          </div>

          {/*Right side */ }
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              {testimonials.map((testimonial, tKey) => (
                <div key={tKey} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl sm:text-3xlIlg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        "
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-white text-base sm:text-lg mb-3 sm:mb-4 ">{testimonial.content}</p>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    )
}