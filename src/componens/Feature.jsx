import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const features  = [{
  title: "AI Code Completetion",
  description: "You’ll collaborate cross-functionally with product, engineering, clinical, and behavioral science teams to deliver scalable, secure, and high-quality data foundations.",
  codeSnippet: `const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });`,
  imagePosition: "left",

},
{
  title: "Automated testing",
  description: "Build and evolve federated data management components to support scalability and patient ownership/control of healthcare data",
  codeSnippet: `const res = await fetch('api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });`,
  imagePosition: "right",
  
},
{
  title: "Smart debugging",
  description: "Build streaming and messaging solutions using Kafka and stream processing frameworks (Flink / Spark / Apache Beam)",
  codeSnippet: `const adapter = new PrismaMariaDb({
  host: env("DATABASE_HOST"),
  user: env("DATABASE_USER"),
  password: env("DATABASE_PASSWORD"),
  database: env("DATABASE_NAME"),
  connectionLimit: 5
});`,
  imagePosition: "left",
  
}
];

export default function Feature() {
  return (
    <section id="features" className="py-16 sm:py-20 px-10 sm:px-8 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:md-6">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              You Comlete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>
        <div className="space-y-16 sm:space-y-20  lg:space-y-32">
          {features.map((feature, key) => (
            <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
              {/* Code section */}
              <div className='flex-1 w-full'>
                <div className='relative group'>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-600/20 rounded-xl sm:rounded-2xl transition-full duration-700"> 
                  </div>
                  <div className='relative bg-gray-900/50 backdrop-blur-sm border border-b-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300'>
                    {/*ID interfice */}
                    <div className='bg-gray-950 rounded-lg 1p- sm:p-4 font-mono texr-xs sm:text-sm'>
                      <div className='flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4 '>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm ">{feature.title}</span>
                      </div>
                      <div>
                        <SyntaxHighlighter language="jsx"
                          style={nightOwl}
                          customStyle={{ 
                            margin: 0,
                            background: 'transparent',
                            borderRadius: "8px", 
                            fontSize: "0.75rem", 
                            lineHeight: "1.4", 
                            height: "100%"
                            }} 
                            wrapLines={true}>
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* text section */}
              <div className='flex-1 w-full'>
                <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left   '>
                  <h3 className='text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white'>{feature.title}</h3>
                  <p className='text-gray-300 text-base lg:text-xl sm:text-lg leading-relaxed'>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
};