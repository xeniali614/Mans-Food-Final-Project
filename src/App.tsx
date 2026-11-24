import { useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Leaf, Menu, X } from 'lucide-react'
import balancedMeal from '../photos/Balanced_meal.jpg'
import dimSum from '../photos/Dim_sum.jpg'
import koreanRiceBowl from '../photos/Korean_rice_bowl.jpg'
import pasta from '../photos/Pasta.jpg'
import pokeBowl from '../photos/Pokebowl.jpg'
import salmonBowl from '../photos/Salmon_bowl.jpg'
import steakAndPasta from '../photos/Steak_and_Pasta.jpg'
import tableOfFood from '../photos/Table_of_food.jpg'

type PhotoProps = {
  src: string
  alt: string
  caption: string
  className?: string
  tape?: boolean
}

const chapters = [
  { id: 'takeaways', label: 'The Main Course', number: '01' },
  { id: 'memorable', label: 'The Secret Recipe', number: '02' },
  { id: 'future', label: 'Sustaining the Energy', number: '03' },
  { id: 'different', label: 'Iterating the Process', number: '04' },
  { id: 'reflection', label: 'Designing the Experience', number: '05' },
]

function Photo({ src, alt, caption, className = '', tape = false }: PhotoProps) {
  return (
    <motion.figure
      whileHover={{ rotate: 0, scale: 1.035, y: -5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`polaroid relative bg-white p-3 pb-14 shadow-polaroid ${className}`}
    >
      {tape && <span aria-hidden="true" className="tape" />}
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <figcaption className="absolute inset-x-3 bottom-3 text-center font-hand text-[22px] leading-none text-ink/80">
        {caption}
      </figcaption>
    </motion.figure>
  )
}

function Chapter({
  id,
  number,
  heading,
  text,
  className,
  children,
}: {
  id: string
  number: string
  heading: string
  text: string
  className: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`chapter-section scroll-mt-24 ${className}`}
    >
      <div className="chapter-copy paper-card relative">
        <div className="mb-5 flex items-center gap-3">
          <span className="chapter-number">{number}</span>
          <span className="h-px flex-1 bg-ink/15" />
          <Leaf aria-hidden="true" size={17} strokeWidth={1.5} className="text-sage" />
        </div>
        <h2 className="font-hand text-[clamp(2.45rem,4vw,3.55rem)] leading-[0.94] text-ink">
          {heading}
        </h2>
        <p className="mt-6 text-[15px] leading-[1.9] text-ink/80 md:text-base">{text}</p>
        <a
          href="#chapters"
          aria-label="Back to chapter index"
          className="chapter-back mt-7 inline-flex items-center gap-2 font-hand text-xl text-clay transition-colors hover:text-ink"
        >
          back to the table <ArrowUpRight size={15} />
        </a>
      </div>
      <div className="chapter-photos">{children}</div>
    </motion.section>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <motion.div
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-clay"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="relative z-50 mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <a href="#top" className="flex items-center gap-2" aria-label="My Food Adventure home">
          <span className="brand-mark"><Leaf size={17} /></span>
          <span className="font-hand text-[25px] font-semibold">little bites, big thoughts</span>
        </a>
        <button
          type="button"
          className="menu-toggle rounded-full border border-ink/15 p-2.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Chapter navigation">
          <a className="top-link" href="#chapters">the chapters</a>
          <a className="top-link" href="#goodbye">the last bite <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile chapter navigation">
          <a href="#chapters" onClick={closeMenu}>the chapters</a>
          <a href="#goodbye" onClick={closeMenu}>the last bite</a>
        </nav>
      )}

      <main>
        <section id="top" className="hero relative mx-auto grid max-w-[1320px] items-center px-5 pb-20 pt-10 sm:px-8 md:min-h-[690px] md:grid-cols-[1.08fr_0.92fr] md:gap-8 md:pb-24 md:pt-5 lg:px-14">
          <div className="hero-copy relative z-10 pb-8 md:pb-0">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="eyebrow"><span className="eyebrow-dot" /> A semester, served slowly</span>
              <h1 className="mt-6 font-hand text-[clamp(5rem,11vw,9.5rem)] font-semibold leading-[0.72] tracking-[-0.06em] text-ink">
                My Food
                <span className="hero-adventure relative block pl-[0.34em] text-clay">Adventure<span className="hero-sparkle">✳</span></span>
              </h1>
              <p className="mt-9 max-w-[465px] text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">
                A Digital Scrapbook &amp; Reflection on Nourishing the Mind and Body
              </p>
              <a href="#chapters" className="hero-cta mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-1">
                Come take a look <ArrowDown size={16} />
              </a>
            </motion.div>
            <span className="hero-note absolute -bottom-10 right-2 hidden rotate-[-8deg] font-hand text-[25px] text-sage md:block">
              made with a full heart
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.94 }}
            animate={{ opacity: 1, rotate: 4, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hero-photo-wrap relative mx-auto mt-4 w-[min(82%,390px)] md:mt-0 md:w-[min(100%,435px)]"
          >
            <span aria-hidden="true" className="hero-sunburst">✳</span>
            <span aria-hidden="true" className="hero-doodle">a little<br />nourishment</span>
            <div className="polaroid hero-polaroid photo-balanced-meal relative bg-white p-3 pb-[76px] shadow-polaroid">
              <span aria-hidden="true" className="tape hero-tape" />
              <img
                src={balancedMeal}
                alt="A plate of rice, beef, eggs, and vegetables"
                className="aspect-[0.91] w-full object-cover"
              />
              <p className="absolute inset-x-3 bottom-4 text-center font-hand text-[30px] text-ink/85">little moments, well nourished</p>
            </div>
            <span className="hero-sticker" aria-hidden="true">GOOD<br />FOOD<br /><span>GOOD</span><br />MOOD</span>
          </motion.div>

          <div className="hero-bottom-note absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink/40 md:flex">
            <span className="h-px w-8 bg-ink/20" /> scroll to explore <span className="h-px w-8 bg-ink/20" />
          </div>
        </section>

        <section id="chapters" className="chapter-index relative mx-auto max-w-[1320px] px-5 py-14 sm:px-8 md:py-20 lg:px-14">
          <div className="index-heading">
            <span className="eyebrow"><span className="eyebrow-dot mustard-dot" /> Your place at the table</span>
            <h2 className="mt-3 font-hand text-5xl leading-none text-ink sm:text-6xl">A few things I’m taking with me</h2>
          </div>
          <div className="index-list mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
            {chapters.map((chapter, index) => (
              <motion.a
                key={chapter.id}
                href={`#${chapter.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="index-link group flex items-center gap-3 border-b border-ink/15 py-3"
              >
                <span className="font-hand text-xl text-clay">{chapter.number}</span>
                <span className="text-sm text-ink/75 transition-colors group-hover:text-clay">{chapter.label}</span>
                <ArrowUpRight size={14} className="ml-auto text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" />
              </motion.a>
            ))}
          </div>
        </section>

        <div className="chapters-wrap mx-auto max-w-[1320px] px-5 pb-16 sm:px-8 lg:px-14">
          <Chapter
            id="takeaways"
            number="01"
            heading="The Main Course: Key Takeaways"
            text="Working at a Chinese restaurant since I was 14, I’ve always been surrounded by food, but I mostly viewed it through the lens of customer service, culture, and hospitality. This course completely shifted my perspective from the 'service' side of food to the 'science and systems' side. My biggest takeaway was learning to look beyond the raw data of nutrition. As someone who studies economics and computer engineering, I’m used to looking at numbers, but this course taught me to understand the meaning behind those numbers. I learned how macronutrients and micronutrients actually interact within the body’s biological systems. Almost like understanding the underlying architecture of a computer, but for human health. I also gained a much deeper appreciation for the complex global systems behind our food, from agricultural supply chains to how economic factors dictate food accessibility. It’s one thing to know what is in your food, it’s another to understand the massive logistical and biological systems required to get it to your plate and how your body processes it."
            className="chapter-one"
          >
            <Photo
              src={salmonBowl}
              alt="A salmon bowl served with vegetables"
              caption="fresh, simple, satisfying"
              className="photo-salmon-bowl"
              tape
            />
            <Photo
              src={tableOfFood}
              alt="Several homemade dishes arranged across a table"
              caption="good food, gathered close"
              className="photo-table-of-food"
            />
            <span className="photo-doodle doodle-one" aria-hidden="true">eat well<br />think well</span>
          </Chapter>

          <Chapter
            id="memorable"
            number="02"
            heading="The Secret Recipe: Most Memorable Activity"
            text="The most memorable part of the course for me was the dietary analysis and food systems tracking assignments. As a hands-on learner, I loved the challenge of taking the theoretical concepts we learned in the modules and applying them to real world. What stood out to me was having to analyze not just the nutritional breakdown of meals, but also the broader context of where that food comes from and how it fits into a daily lifestyle. It required me to switch between big-picture strategy (looking at overall dietary patterns and food supply chains) and technical execution (tracking specific macros, micros, and caloric intake). It resonated with me because it felt less like a traditional academic worksheet. It forced me to evaluate the 'inputs' (my food) and understand how they directly impact the 'outputs' (my energy, focus, and long-term health)."
            className="chapter-two"
          >
            <Photo
              src={pasta}
              alt="A plate of creamy pasta with chicken and mushrooms"
              caption="comfort, served warm"
              className="photo-pasta"
              tape
            />
            <span className="photo-doodle doodle-two" aria-hidden="true">inputs →<br />outputs</span>
          </Chapter>

          <Chapter
            id="future"
            number="03"
            heading="Sustaining the Energy: Future Application"
            text="Moving forward, I plan to treat my diet with the same intentionality I apply to my coding projects or my guitar practice. When I’m deep into a project or studying for my classes, it’s easy to grab whatever is quickest, which often leads to an energy crash. I now understand the biological reasons behind those crashes and how specific nutrient balances can sustain cognitive function and prevent brain fog. Additionally, because I’ve worked in the restaurant industry for years, I know how tempting and easy it is to rely on heavy, carb-rich restaurant meals. I plan to use what I’ve learned to balance my diet enjoying the food I love but being much more mindful of portion sizes, hidden sodium, and ensuring I’m getting enough micronutrients to support my active lifestyle. I want to build sustainable, healthy habits that allow me to perform at my best, both in my major and in my personal life."
            className="chapter-three"
          >
            <Photo
              src={koreanRiceBowl}
              alt="A Korean-style rice bowl topped with meat, egg, and vegetables"
              caption="a bowl of bright energy"
              className="photo-korean-rice-bowl"
              tape
            />
            <Photo
              src={pokeBowl}
              alt="A poke bowl with fish, vegetables, and rice"
              caption="fresh from the sea"
              className="photo-poke-bowl"
            />
            <span className="photo-doodle doodle-three" aria-hidden="true">little habits,<br />lasting energy</span>
          </Chapter>

          <Chapter
            id="different"
            number="04"
            heading="Iterating the Process: What I'd Do Differently"
            text="If I could go back to the beginning of the semester, I would have started applying the course concepts to my own daily life on day one, rather than treating them purely as academic material to be studied for assignments. My strength as a learner is that I’m highly detail-oriented and a quick learner, but my weakness is that I sometimes get too caught up in the technical execution and forget to step back and experience the process. Early in the course, I was so focused on getting the right answers for the modules that I didn't fully experiment with changing my own eating habits in real-time. If I could do it again, I would use the first few weeks as a personal sandbox, testing out different meals, tracking my energy levels, and iterating on my diet just like I would when refining a personal project. I’d embrace the trial and error much earlier."
            className="chapter-four"
          >
            <Photo
              src={dimSum}
              alt="A spread of dim sum dishes served in a bamboo steamer"
              caption="small bites, shared stories"
              className="photo-dim-sum"
              tape
            />
            <span className="photo-doodle doodle-four" aria-hidden="true">try, taste,<br />try again</span>
          </Chapter>

          <Chapter
            id="reflection"
            number="05"
            heading="Designing the Experience: Why a Digital Scrapbook?"
            text="Creating a website for this reflection was honestly my favorite part of the assignment. As someone who works with design and front-end development, I learn best by building and creating. A traditional essay feels a bit restrictive and doesn't really capture the visual, dynamic nature of food and personal growth. This format allowed me to step out of the standard academic box and design a user experience for my own reflection. It helped me engage more deeply because I had to think about how to visually organize my thoughts, use imagery to tell a story, and structure the information so it’s actually enjoyable to read. It turned a standard look back at the semester task into a practical, hands-on design project, which perfectly aligns with how I prefer to learn and express myself."
            className="chapter-five"
          >
            <Photo
              src={steakAndPasta}
              alt="Sliced steak served over pasta"
              caption="a little something to savor"
              className="photo-steak-and-pasta"
              tape
            />
            <span className="photo-doodle doodle-five" aria-hidden="true">designed<br />with feeling</span>
          </Chapter>
        </div>
      </main>

      <footer id="goodbye" className="footer relative overflow-hidden px-5 py-16 text-center sm:py-20">
        <span aria-hidden="true" className="footer-flower footer-flower-left">✿</span>
        <span aria-hidden="true" className="footer-flower footer-flower-right">✳</span>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-2xl"
        >
          <span className="eyebrow justify-center"><span className="eyebrow-dot" /> Until the next meal</span>
          <h2 className="mt-5 font-hand text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] text-paper">
            Thanks for scrolling through my food adventure!
          </h2>
          <span className="footer-line mx-auto mt-7 block h-px w-14 bg-paper/35" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-paper/55">made with a dash of curiosity</p>
        </motion.div>
      </footer>
    </div>
  )
}
