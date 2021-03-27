// import s from "./News.module.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export function News() {
  const [newsUrl, setNewsUrl] = useState("");  
  const [news, setNews] = useState([]);
  const id = useParams();
  
  
  useEffect(() => {
    const fetchCategories = async () => {
      const fc = await axios(ruvUrl);      
      fc.data.forEach((e) => {
        if (e.id == Object.values(id)[0]){
          console.log("match");
          setNewsUrl(e.url);
        }
      });      
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const result = await axios(newsUrl);
      
      setNews(result.data.items);      
    };
    fetchNews();
  }, []);

  console.log(news);

  return <h1> hallo</h1>;
}
