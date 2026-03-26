/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  Leaf, 
  Clock, 
  Heart, 
  CheckCircle2, 
  Bolt, 
  Instagram, 
  Facebook,
  UtensilsCrossed
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav ambient-glow">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-[#f9b826] w-8 h-8" />
            <span className="font-headline font-bold tracking-tight text-2xl italic text-[#3a683f]">Soul Serve</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="font-label text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#about">About</a>
            <a className="font-label text-sm font-medium text-on-surface-variant hover:text-primary transition-colors" href="#ingredients">Ingredients</a>
            <button className="sun-soaked-gradient text-on-primary px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity active:scale-95 duration-200 cursor-pointer">
              Notify Me
            </button>
          </div>
          <button className="md:hidden text-on-surface cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 z-10"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase mb-6">
                Arriving Soon
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
                The Healthiest, <span className="text-secondary italic">Tastiest</span> Poha is On the Way
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                Nourish your soul with the goodness of ancient grains and modern convenience. We're redefining breakfast, one bowl of instant poha at a time.
              </p>
              
              {/* Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="relative flex-grow">
                  <input 
                    className="w-full px-6 py-4 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface outline-none placeholder:text-outline" 
                    placeholder="Enter your email" 
                    type="email"
                  />
                </div>
                <button className="sun-soaked-gradient text-on-primary px-8 py-4 rounded-xl font-bold whitespace-nowrap shadow-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer">
                  Get Early Access
                </button>
              </div>
              <p className="mt-4 text-xs text-outline font-medium">Join 2,000+ early birds waiting for the launch.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-0">
                <img 
                  alt="Gourmet bowl of poha" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4pLgtH_fJRoKIiSfl2mZFnZDUIfZu4JVf4aCtSnrA6oF7k7AT_4XjMj0jgj1EQHY6OfE4fwXq6PIMLMb7lgwGZTI2rLZumewoFqya-v85ZPfUGsKQul1R305i0L96GiiOHYzw9cU9g0JIPVPjGX9T-oG99qEgEMHwRxoLeSx5zx6fQukDNGPr5XFu6UAYwJoP_nxLNuy6t7vWhYr1brK8-C7KJtHAUnoVmI_2tgGWsfXDWQPpy-3Po9eP1II1mCPFsjUnhQTyaX4"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant/10"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <Leaf className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">100% Natural</p>
                  <p className="text-xs text-on-surface-variant">No preservatives added</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low rounded-l-[5rem]"></div>
        </section>

        {/* About Section (Bento Grid) */}
        <section className="py-24 bg-surface-bright" id="about">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-4">Why Soul Serve?</h2>
              <p className="text-on-surface-variant font-label max-w-2xl mx-auto">
                We believe healthy eating shouldn't be a compromise. Our poha is crafted for the modern, fast-paced life without losing the soul of traditional flavors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bento Item 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-surface-container-low rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group"
              >
                <div className="z-10">
                  <h3 className="font-headline text-3xl font-bold text-secondary mb-4">Artisan Quality</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    Sourced directly from organic farms, our flat rice is processed using traditional methods to maintain its nutritional integrity and perfect texture.
                  </p>
                </div>
                <div className="mt-8 flex gap-4 z-10">
                  <span className="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold text-secondary">NON-GMO</span>
                  <span className="px-4 py-2 bg-surface-container-lowest rounded-full text-xs font-bold text-secondary">GLUTEN FREE</span>
                </div>
                <img 
                  alt="Fresh green paddy field" 
                  className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbzlGeoGgSgeekK-pX2UgACg6CuERfw-LNrkrsBJEVm2cYYc_I7IOFXSN6SD6qMzAj3nb7Fzgz8Ai77TNCV1lUm6bV9qP7VbF068xISzfH5JXAPuRYu1E8dfICgYD5E4H9COtk2x_AR6xb2GQD1nP8bOQiEDfOtvbx8ArE3fiCAaTown4XZPCjXDR09PQvMaTcg0dYpa0n1EAsGxoyEboUE2HHvcdwQje2zApOvLOJZ7AcQlxVazsiOuzVuywOJK4HfLuftXM1pgU"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Bento Item 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary-container rounded-[2.5rem] p-10 flex flex-col justify-center text-on-primary-container relative overflow-hidden"
              >
                <Clock className="w-12 h-12 mb-6" />
                <h3 className="font-headline text-2xl font-bold mb-4">Ready in 3 Mins</h3>
                <p className="font-medium opacity-90">Just add hot water, cover, and let the magic happen. Your healthy breakfast is served instantly.</p>
              </motion.div>

              {/* Bento Item 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface-container-highest rounded-[2.5rem] p-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 shadow-sm">
                  <Heart className="text-secondary w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Good for Your Heart</h3>
                <p className="text-sm text-on-surface-variant">Low glycemic index and high fiber content to keep you energized throughout the day.</p>
              </motion.div>

              {/* Bento Item 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 bg-secondary rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 text-on-secondary"
              >
                <div className="flex-grow">
                  <h3 className="font-headline text-2xl font-bold mb-4">Mindful Ingredients</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-5 h-5" />
                      <span>Premium Red & White Poha</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-5 h-5" />
                      <span>Cold-pressed Oils Only</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary-container w-5 h-5" />
                      <span>Himalayan Pink Salt</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white/10">
                  <img 
                    alt="Healthy ingredients bowl" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgCPv53ScVCWN7bRYuzsLpZrZGIpwbOHclmmc0eEddIeqb9qQ9J6J1Ea8EDvqg7d7s_wxjO_8ZaW79rhavnhYdPFiZimqORdmrlDS80k9oqUENnDcHRiVF-RvSW2bkna_leTrJnSTHR9716cM-Xh6B_TqEzP3HJxoLddgwLfFPbcz80JKHUfwv3qSAo2ReG-zgvbNc6VUWqu9Zf8TIOFVB2IVzxswgpekrQgyB7bdUE5u7rcpNHtwaQsxqXOmstMRN5ecqmXA32w"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      alt="Yoga lifestyle" 
                      className="w-full h-64 object-cover rounded-[2rem] shadow-lg" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZy4MjVF1TnOtJTN_-tLS6mFwma6DBe16lpUZzv-Xh5jUy_4wTBTwrrC2R6cvi_VLYrYqirdeDk3t-LUwz-_IEoVUG8MvTMiU4aC0YRgpXNGztcHer2dle8Zz8KAHhEa3GhFpmDO1sDV1B4rRjxbmCf4wgWveA9EUFZD8Y9rAjcSQgDhe4OUYeOalDnpourMB9l27-qVb1kaAMWJR3XKEM4voC6NX6_4OnvONTgwEvTN036AKXdtocXZvc3rP1ItinApdc1ohZV2M"
                      referrerPolicy="no-referrer"
                    />
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      alt="Morning run" 
                      className="w-full h-48 object-cover rounded-[2rem] shadow-lg" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnlAeuG_CeS6_YTH3LvNIrT0020h7-LWIfUqHDj9cPQuV61nYynxn6ePubA8Q4OkiYjVd3JZe6zRbGYcve-cG3jWXZtKb_uqp23X1HL7sytI3apiuFAyMUKTNEQkSsjn7FZMymvODUSjDpeH7fQtQY4l0X0ZWnn27GqBGL0Q5OHhz8WH2lswzc-5n8aKBYGDK-05G62j_Dcch-Vyzv9WJKun_ufMSoS3wm2-IHYSn5N-sIP07xHcp6HDdLWXJIyA9nBEKRl-X5gQ"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      alt="Healthy lunch box" 
                      className="w-full h-48 object-cover rounded-[2rem] shadow-lg" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgqqtb7T4pFlMmo3IziIbKBez3cjATqEOsSQUx8c_ugHF8QgiOjv8TKYSCDE2IR6TZDN-YE7HBi7t3DO7gFioUFnZ4K5slyHGvAxJgtzWCjw-3f4--D413TmEd-DNH1gedUZr-xIhzNOUvT3yugsrgjbCTBvVhq93zMl5JXnfuYRsWxYd4e2a4-5sCZCBkklgOmO3VOwL40vNxla--Zu4gQpF7CNE3UKwdocodaXDfUABJW9P3duC5UWDHD4uYDov8E7ArGyCMg8Q"
                      referrerPolicy="no-referrer"
                    />
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      alt="Meditation" 
                      className="w-full h-64 object-cover rounded-[2rem] shadow-lg" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXfJB5Jo8HyHnH-R8hX694jYmx-96nkmvy4-5ZLIfyiokqN4ssIdO_WRaGtP8zz88c6NR1xtedGZoxVLSN_NquMjGIBgnh82jJfQ8nAv9bEe08HbGdeMRGkbaWkIeM9NmL3Qs_E8WDSWyIcn8Rfx-wnUCZMtyKc9vuUUSGE5ujNfiSTFLMp1jpjcv7fReN9bGOyzWrPUkT-dFwjiRd_OjtoWh3waxAeMWqdETB-Rc8uner9BAZ6dk8JJlsj5poxn0bfvfMSTf98K0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
                Fuel Your Most <br/><span className="text-primary italic">Ambitious</span> Days
              </h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Soul Serve isn't just about food; it's about the energy to pursue your passions. We provide the nourishment, you provide the spark.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Bolt className="text-primary w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-on-surface">Clean Energy</h4>
                    <p className="text-sm text-on-surface-variant">Complex carbohydrates for sustained mental and physical performance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="text-primary w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-on-surface">Eco-Friendly Packaging</h4>
                    <p className="text-sm text-on-surface-variant">We're committed to the planet with 100% compostable outer packaging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto sun-soaked-gradient rounded-[3rem] p-12 md:p-20 text-center text-on-primary shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6">Don't Miss the First Serve</h2>
              <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
                Be the first to know when we launch and receive an exclusive 30% discount on your first order.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="flex-grow px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50" 
                  placeholder="Your best email" 
                  type="email"
                />
                <button className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-xl hover:bg-opacity-90 active:scale-95 transition-all cursor-pointer">
                  Get VIP Access
                </button>
              </form>
            </div>
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-20 -mb-20 blur-2xl"></div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-[#f4f3f2]">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-12 gap-6 w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-[#1a1c1c] font-headline">Soul Serve</span>
            <p className="font-body text-sm tracking-wide text-neutral-500 text-center md:text-left">
              © 2024 Soul Serve. Nourishing your journey.
            </p>
          </div>
          <div className="flex gap-8">
            <a className="text-neutral-500 hover:text-[#3a683f] transition-colors font-body text-sm font-medium" href="#">About</a>
            <a className="text-neutral-500 hover:text-[#3a683f] transition-colors font-body text-sm font-medium" href="#">Ingredients</a>
            <a className="text-neutral-500 hover:text-[#3a683f] transition-colors font-body text-sm font-medium" href="#">Privacy</a>
          </div>
          <div className="flex gap-6">
            <a className="text-neutral-500 hover:text-[#f9b826] transition-colors" href="#">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
            <a className="text-neutral-500 hover:text-[#f9b826] transition-colors" href="#">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
