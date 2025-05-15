const CodeForGood = () => {
  return (
    <section
      id="front-end"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0"
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        Proof That 24 Hours, Google, and Caffeine Can Change the World (Sort Of)
      </h2>

      <hr className="border-t-2 border-gray-700" />

      <div className="flex flex-wrap gap-2 mt-2 items-center justify-center mb-4">
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Django</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">HTML/CSS</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Bootstrap</span>
      </div>

      <div className="text-justify text-black dark:text-white bg-accent font-sans p-4 dark:font-thin rounded-2xl">
        <p className=" mb-4">In my second year of college, I was selected for JPMorgan Chase&apos;s Code for Good Hackathon — an opportunity that sounded impressive on paper and terrifying in real life. I&apos;d never built a real-world app, never worked with a live backend, and never coded under pressure (unless you count 11:59 PM assignment submissions). Yet somehow, there I was, two days before the hackathon, googling “how to React fast” and convincing myself I could become a fullstack prodigy overnight.
        </p>

        <p className="text-xl font-bold font-mono mb-1">Problem Statement</p>
        <p className=" mb-4">
          Our team was partnered with Samarthya, an NGO focused on improving public education by increasing parental involvement — especially in underserved communities where parents often face language or literacy barriers. The problem we had to solve wasn&apos;t just technical; it was deeply human. How do you make school communication accessible to non-literate parents in rural Rajasthan? How do you empower them to engage in their child&apos;s education when even reading a basic announcement can be a challenge?

          We needed to build a web platform that would translate school updates into local languages, convert text to speech, and offer an interface that could be navigated without needing to read. And we had 24 hours to do it.


        </p>

        <p className="text-xl font-bold font-mono mb-1">Contributions</p>
        <p className=" mb-4">
          I volunteered to work on both frontend and backend — partly out of excitement, partly because I didn&apos;t yet know what I was getting into. We built the backend with Django, handling APIs for announcements, user roles (parents, teachers), and language translations. It was my first real exposure to designing database schemas, writing serializers, and integrating third-party tools.

          For the frontend, we stuck with vanilla HTML/CSS and JavaScript — no React, no frameworks, just good old-fashioned divs, classes, and the occasional sob. I focused on creating clean, functional UI screens for login, announcements, and audio playback. Accessibility was at the center of every design choice — large buttons, visual cues, and speech feedback wherever possible.

          I also worked on integrating the Google Text-to-Speech API for Hindi and other regional languages. We even included a feature where pressing a button would read out the contents of the announcement aloud — a small feature that had a big impact.</p>

        <p className="text-xl font-bold font-mono mb-1">Takeaways</p>
        <p className=" mb-4">
          Looking back, this hackathon was the spark. It was the weekend that turned curiosity into conviction. I wasn’t the best developer in that room — not even close — but I came out believing that I could build things that mattered. That I could learn fast, adapt faster, and write code that had impact.

          And I’ve been chasing that feeling ever since.</p>
      </div>

    </section>

  );
};

export default CodeForGood;