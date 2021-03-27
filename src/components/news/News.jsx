// import s from "./News.module.scss";
import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

export function News({data}) {
  console.log("in news: " + data);
  return (    
    <div>
      <h1> hallo</h1>
    </div>
  );
}
