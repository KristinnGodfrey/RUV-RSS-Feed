import s from "./NewsList.module.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import { News } from "../news/News.jsx";

dotenv.config();


const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export function NewsList({ title, newsLink }) {
  const [news, setNews] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const result = await axios(newsLink);
      // console.log(result.data);
      setNews(result.data.items);
      setNewsData(result.data);
    };
    fetchNews();
  }, []);

  let linkTitle = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    <div className={s.news_list__item}>
      <h2>{title}</h2>
      {/* {console.log(news[0])} */}
      {news.slice(0, 5).map((article) => (
        <p key={article.link}>
          <a href={article.link}>{article.title}</a>
        </p>
      ))}

      <p>
        {/* {console.log(newsData)} */}
        <Link
          to={{
            pathname: `${linkTitle}`,            
          }}
        >
          Allar frettir
        </Link>
      </p>
    </div>
  );
}
