import s from "./NewsList.module.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
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
      {news.slice(0, 5).map((article) => (
        <p key={article.published}>
          <a href={article.link}>{article.title}</a>
        </p>
      ))}
      {/* <section>
        
        <Switch>
          <Route
            path={linkTitle}
            render={(props) => (              
              <News {...props} key={newsData.title} data={newsData.items}  />
            )}
            {...console.log(newsData)}
          />
        </Switch>
      </section> */}

      <p>
        <NavLink to={linkTitle}>Allar fréttir</NavLink>
      </p>
    </div>
  );
}
