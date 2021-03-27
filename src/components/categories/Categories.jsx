import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsList } from "../news-list/NewsList.jsx";
import s from "./Categories.module.scss";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export function Categories(filterCategory) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let result = await axios(ruvUrl);
      console.log(result.data);
      // result.data.forEach((e) => {
      //   if (e.id == filterCategory){
      //     result = result.data.filter(id => id == e.id);
      //   }
      // });
      // console.log(result.data[0]);

      // console.log(asni);

      if (Object.keys(filterCategory).length != 0) {
        // result = result.data.filter(id => id == "innlent")
        // console.log(result);
      } else {
        // result = result.data.filter(id => id == "innlent")
        // console.log(result);
      }

      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  return categories.map((category) => (
    <section className={s.categories__section}>
      <div className={s.categories__item}>
        <NewsList
          key={category.id}
          title={category.title}
          newsLink={category.url}
        />
      </div>
    </section>
  ));
}
