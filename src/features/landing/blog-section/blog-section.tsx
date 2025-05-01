"use client"

import axios from "axios";
import { ArrowDownRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Section, SectionContent, SectionHeader, SectionHeading, SectionTopline } from "../landing-section";

type Article = {
  pubDate: string;
  title: string;
  link: string;
  description: string;
}

const MediumArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sanjanareji06"
        );
        const fetchedArticles = response.data.items.map((item: Article): Article => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
            month: "short", // Three-letter month
            day: "2-digit", // Two-digit day
            year: "numeric", // Full year
          }),
          description: item.description.replace(/<[^>]*>?/gm, ""), // Remove HTML tags
        }))
        .sort((a : Article, b : Article) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Section
      id="blog"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <SectionHeader>
        <SectionTopline variant="secondary">Blog</SectionTopline>
        <SectionHeading>MEDIUM BLOG</SectionHeading>
      </SectionHeader>
      {/* <h2 className="text-3xl font-bold text-center mb-8">
        MEDIUM BLOG
      </h2> */}
      {loading ? (
        <p className="text-center">Loading articles...</p>
      ) : (
        <SectionContent className="grid grid-cols-1">
          {articles.map((article, index) => (
            <div key={index} className="group space-y-5">
              <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{article.title}</h2>
                <button
                  onClick={() => window.open(article.link, "_blank")}
                  className="bg-muted group-hover:bg-accent p-4 group-hover:-rotate-45 rounded-full transition-all duration-700"
                >
                  <ArrowDownRightIcon />
                </button>
              </div>
              <p className="text-sm">{article.pubDate}</p>
              
              <div className="border-b" />
            </div>
          ))}
        </SectionContent>
      )}
    </Section>
  );
};


export default MediumArticlesSection;