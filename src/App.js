// TODO sækja og setja upp react router
import React, { useEffect, useState } from "react";
import { Layout } from "./components/layout/Layout";
import { Route, Switch, NavLink } from "react-router-dom";
import { Index } from "./pages/Index";
import { NewsPage } from "./pages/News";
import { NotFound } from "./pages/NotFound";

const ruvUrl = "https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/";

export default function App() {  

  return (
    <Layout title="RÚV fréttir">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/:id" component={NewsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}
