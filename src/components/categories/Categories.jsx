import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsList } from "../news-list/NewsList.jsx";
import s from "./Categories.module.scss";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(ruvUrl);
      // console.log(result.data);
      setCategories(result.data);
      // console.log(categories);
    };
    fetchCategories();
  }, []);

  return categories.map((category) => (
    <section>
      <NewsList
        key={category.id}
        title={category.title}
        newsLink={category.url}
      />
    </section>
  ));
}
