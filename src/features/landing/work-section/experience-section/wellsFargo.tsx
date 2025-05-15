const WellsFargoExp = () => {
  return (
    <section
      id="front-end"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0"
    >
      <h2 className="text-3xl font-bold text-center mb-2">
        Monolithic to Microservice Architecture Migration
      </h2>
      <h3 className="text-2xl text-gray-700 font-mono text-center mb-2">A Systems Thinking Approach</h3>

      <hr className="border-t-2 border-gray-700" />

      <div className="flex flex-wrap gap-2 mt-2 items-center justify-center mb-4">
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Java 17</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Kafka</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Redis</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Apigee Porxy</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Jenkins CI/CD</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">GitSaaS</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">GitSaaS</span>
        <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">Splunk</span>
      </div>

      <div className="text-justify text-black dark:text-white bg-accent font-sans p-4 dark:font-thin rounded-2xl">
        <p className="mb-4">
          Migrating from a monolithic architecture to microservices wasn&apos;t just a code rewrite — it was a full-scale system redesign. The stakes were high: a critical, high-traffic platform, limited team capacity, and aggressive timelines meant I was involved at every stage of the transformation.
        </p>

        <p className="text-xl font-bold mb-1">Discovery and Decomposition</p>
        <p className="mb-4">
          We began by analyzing the usage of a legacy bulk API that was serving a wide range of downstream consumers. Through close collaboration with stakeholders, we identified the exact fields being used and the different use cases being served. This allowed us to break down the bulk API into multiple microservices — each focused on a specific responsibility — following the principle of separation of concerns. This not only made the architecture cleaner but also improved maintainability and performance.
        </p>

        <p className="text-xl font-bold mb-1">Optimization for Scale and Event-Driven Design</p>
        <p className="mb-4">
          The system processes over two billion API calls annually, so performance and scalability were major concerns. To minimize the load on downstream systems, we introduced Redis caching, significantly reducing latency and cutting down unnecessary external calls. We also transitioned to an event-driven model using Kafka. This enabled asynchronous processing and parallel execution of downstream tasks like customer notifications, without blocking the main API response. These architectural decisions helped ensure the system could scale efficiently under heavy load.
        </p>

        {/* <p className="text-xl font-bold mb-1">Refactoring Codebase</p>
      <p className="text-white mb-4">
        Migrating functionality from the legacy system to microservices required consistency in data logic while improving code quality. We rewrote modules using Java 17, adopting modern language features and improved standards. Alongside this, we reviewed and revamped internal utilities — applying principles like separation of concerns and reducing interdependencies — to create a more modular and reusable codebase.
      </p> */}

        <p className="text-xl font-bold mb-1">Proxy Integration</p>
        <p className=" mb-4">
          Authentication and authorization were abstracted through a centralized proxy layer. This layer enforced access controls, managed rate limiting, and ensured sensitive data was properly masked, aligning with PCI compliance requirements. We worked closely with the platform security team to ensure consistent identity propagation and secure service-to-service communication across the microservices.
        </p>

        <p className="text-xl font-bold mb-1">Documentation</p>
        <p >
          One of the first things I quickly realized in a corporate environment is that documentation isn&apos;t just helpful — it&apos;s absolutely essential to get any work done. A lot of the work relies on insider knowledge that&apos;s specific to the enterprise or application, and without that context, even basic tasks can become blockers.

          Given that we were often working under tight deadlines, I made it a priority to document every new process, feature, or pipeline I was involved with. Whether it was onboarding a new component, managing a release, or setting up a proxy, I ensured that the steps were clearly written down in a centralized place for the team to refer to.

          This habit proved incredibly valuable, especially during KT sessions and onboarding. It also helped when internal consumer teams reached out — instead of repeatedly explaining the API scope or integration steps, I could point them to well-maintained documentation that answered most of their questions. It became a key part of how I contributed to the team&apos;s velocity and reduced dependencies during development and release cycles.
        </p>
      </div>


    </section>

  );
};

export default WellsFargoExp;