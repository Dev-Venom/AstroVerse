"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type Article = {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
};

export default function SpaceNews() {

  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {

    async function fetchNews() {

      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/?limit=6"
      );

      const data = await response.json();

      setArticles(data.results);
    }

    fetchNews();

  }, []);

  return (
    <section className="bg-black px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <Reveal>

          <div className="text-center mb-20">

            <p className="text-purple-400 uppercase tracking-[0.3em] mb-4">
              Space Updates
            </p>

            <h2 className="text-5xl md:text-6xl font-bold">
              Latest Space News
            </h2>

          </div>

        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">

          {articles.map((article) => (

            <Reveal key={article.id}>

              <a
                href={article.url}
                target="_blank"
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/40 transition duration-300"
              >

                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="p-8">

                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-300 transition">

                    {article.title}

                  </h3>

                  <p className="text-gray-400 line-clamp-4">

                    {article.summary}

                  </p>

                </div>

              </a>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}