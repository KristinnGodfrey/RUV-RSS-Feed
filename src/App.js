// TODO sækja og setja upp react router
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "./components/layout/Layout";
import { NewsList } from "./components/news-list/NewsList";
import { News } from "./components/news/News";
import { Route, Switch, NavLink } from "react-router-dom";
import { Index } from "./pages/Index";
import { NewsPage } from "./pages/News";
import { NotFound } from "./pages/NotFound";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(ruvUrl);
      // console.log(result.data);
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  let linkTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  return (
    <Layout title="RÚV fréttir">
      {categories.map((category) => (
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <NewsList
                {...props}
                key={category.id}
                title={category.title}
                newsLink={category.url}
              />
            )}
          />
        </Switch>
      ))}
    </Layout>
  );
}
