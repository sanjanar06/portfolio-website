const WellsFargoInternExp = () => {
  return (
    <section
      id="front-end"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0"
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        Building Real-Time Analytics Dashboard
      </h2>
      <h3 className="text-xl text-gray-700 font-mono text-center mb-2">Channeling my inner Richard Hendricks: 16 interns, one fintech tool, and agile.</h3>

      <hr className="border-t-2 border-gray-700" />

      <div className="flex flex-wrap gap-2 mt-2 items-center justify-center mb-4">
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Java 17</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Kafka</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Spark</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">PyDash</span>
      </div>

      <div className="text-justify bg-accent font-sans p-4 font-thin rounded-2xl">
        <div>
          <p className=" text-white mb-4">
            During my internship at Wells Fargo, I worked on a real-time analytics dashboard that visualized large-scale financial data to provide immediate insights into customer transactions, account activity, and service usage. The system used a combination of Kafka, Spark, and MongoDB to stream and store data, while Pydash (our custom Python dashboard) brought everything to life visually. Think of it as the control room for all things data-driven at the bank.
          </p>
          <p className="text-xl font-bold mb-1">Contributions</p>
        <p className="text-white mb-4">
          I was part of the team that built and extended Pydash, the Python-based analytics dashboard. My core responsibilities included:

          <ol className="list-decimal list-inside"></ol>
          <li>Designing and coding interactive visualizations for real-time data (e.g., transaction heatmaps, service usage graphs, geo-demographics)</li>
          <li>Pulling and aggregating data from MongoDB using live feeds powered by Kafka + Spark</li>
          <li>Creating helper scripts to calculate derived metrics like dormant accounts, service popularity, and regional performance</li>
          <li>Collaborating with the data engineering teams to ensure alignment across different data sources and schemas</li>
        </p>

        </div>
        <div>
          <img
            src="/work/csbbtDashboard.png"
            alt="Wells Fargo Intern"
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />  
        </div>

        <p className="text-xl font-bold mb-1">Takeaways</p>
        <p className="text-white mb-2">
          As a huge fan of the Silicon Valley series, I jokingly introduced daily stand-ups to my sub-team at the start. To my surprise, these brief 10-minute check-ins turned out to be super effective, especially as our team grew larger. Before long, I found myself organizing Kanban boards, documenting everything (yes, everything), and making sure that no one was duplicating work or building the same graph twice.
          As the project scaled, I took on a more proactive role, working to align goals across three subteams:</p>

        <ol className="list-decimal list-inside">
          <li>Kafka Team (real-time ingestion)</li>
          <li>Spark Team (streaming transformation)</li>
          <li>Dashboard Team (bringing it all to life, where I was based)</li>
        </ol>

        <p className="mt-3">To keep everything running smoothly, I set up discord channels, organized weekly syncs, and used the kanban board and github project board to ensure everyone stayed aligned. The process of collaborating with different sub-teams helped maintain clarity and ensured no one was left behind, especially as things got more complex.
          Here's where things got even more interesting: during COVID, I had limited access to internal systems, which meant I had to build a standalone analytics platform from scratch. This turned out to be a blessing because it gave me autonomy and a deeper understanding of working in a remote-first environment. It was a perfect opportunity to step up and take ownership while learning to balance collaboration and independent work.
        </p>
      </div>
    </section>
  );
};

export default WellsFargoInternExp;