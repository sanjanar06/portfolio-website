"use client"

import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
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
        const fetchedArticles = response.data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          description: item.description.replace(/<[^>]*>?/gm, ""), // Remove HTML tags
        }));
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
    <section
      id="medium-articles-section"
      className="snap-start min-h-[calc(100vh-5rem)] mx-auto max-w-screen-lg px-4 xl:px-0 "
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        My Medium Articles
      </h2>
      {loading ? (
        <p className="text-center">Loading articles...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default MediumArticlesSection;