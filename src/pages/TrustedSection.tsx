
export default function TrustedSection() {
  return (
    <section className="py-12 bg-muted/30" >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground dark:text-gray-100 animate-fade-in">
          Trusted by These Brands
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 animate-fade-in">
          Premium organic products loved by stores and families worldwide.
        </p>

        {/* Logo & Name Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center animate-fade-in">
          {/* 1 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/09/didi_food-logo_brandlogos.net_9ptmf.png"
              alt="Nature Co"
              width={100}
              height={100}
              className="opacity-80 object-cover hover:opacity-100 transition"
            />
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/03/bolt_food-logo-brandlogo.net_-768x768.png"
              alt="Organic Life"
              width={100}
              height={100}
              className="opacity-80 hover:opacity-100 transition"
            />
         
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/07/airasia_food-logo_brandlogos.net_0ezty-768x768.png"
              alt="EcoLux"
              width={100}
              height={100}
              className="opacity-80 hover:opacity-100 transition"
            />
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/05/shopee_food-logo_brandlogos.net_7ykkw-768x768.png"
              alt="GreenFarm"
              width={100}
              height={100}
              className="opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
