import { Check, Star } from "lucide-react"
import { useState } from "react"


const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Знайомтеся з можливостями штучного інтелекту.",
    features: [
      "Отримуйте прості пояснення",
      "Використовуйте короткі чати для типових запитань",
      "Спробуйте створення зображень",
      "Зберігайте обмежену пам’ять і контекст"
    ],
    mostPopular: false,
  },
  {
    name: "Plus",
    price: "79.99",
    description: "Продовжуйте спілкування з розширеними можливостями.",
    features: [
      "Вирішуйте складні проблеми",
      "Ведіть довгі чати, розділені на кілька сеансів",
      "Швидко створюйте більше зображень",
      "Запам’ятовуйте цілі й минулі розмови",
      "Плануйте подорожі й завдання в режимі агента",
      "Організовуйте проєкти й налаштовуйте GPT",
      "Створюйте й поширюйте відео в програмі Sora",
      "Пишіть програмний код і створюйте програми за допомогою Codex"
    ],
    mostPopular: true,
  },
  {
    name: "Pro",
    price: "49.99",
    description: "Використовуйте всі можливості.",
    features: [
      "Опановуйте складні завдання й теми",
      "Реалізуйте великі проєкти, використовуючи необмежену кількість повідомлень",
      "Створюйте високоякісні зображення в будь-якій кількості",
      "Зберігайте весь контекст завдяки максимальній пам’яті",
      "Проводьте дослідження та плануйте завдання за допомогою агентів",
      "Масштабуйте свої проєкти й автоматизуйте робочі процеси",
      "Розширюйте свої можливості завдяки створенню відео в Sora",
      "Швидше впроваджуйте програмний код за допомогою Codex",
      "Отримуйте ранній доступ до експериментальних функцій"
    ],
    mostPopular: false,
  },
  
]

export default function Pricing() {

  const[selectedTarrif, setselectedTarrif] = useState("Plus");

  const hendlerSelect = (tarrif) => {
      setselectedTarrif(tarrif);
  };

  const isTarrif = (name) => selectedTarrif === name;

  return (
    <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-8 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:md-6">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Simple Transparetn
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing plans
            </span>
          </h2>
          <p className="text-gray-400 text-xl sm:Text-lg max-w-2xl mx-auto">
            VARCHAR is a good choice for the name, owner, and species columns because the column values vary in length.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 ">
          {plans.map((plan, key) => (
            <div key={key}  onClick={() => hendlerSelect(plan.name)} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${isTarrif(plan.name) ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105": "border-slate-800 hover:border-slate-700"}`}>
            {plan.mostPopular && (
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white"/>
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center ">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base ">
                    /month
                    </span>
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                {plan.features.map((feature, fearureKey) => (
                  <li key={fearureKey} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400"/>
                    </div>
                    <span className="text-gray-300 text-sm ms:text-base ">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-full duration-300 mt-auto hover:scala-102 cursor-pointer tex-sm sm:text-base
              ${isTarrif(plan.name)
                ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                : "bg-white/5 border border-white/10 hover:bg-white/10"}`}>
                Get Started
              </button>
            </div>  
          ))}
        </div>
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <p  className="text-gray-400 text-base text-xl">
          Need a custom plan?
          <a href="#" className="text-blue-400 hovver:text-blue-300">Contact our sales team</a>
        </p>
      </div>
    </section>
    )
}