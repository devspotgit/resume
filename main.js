import { home } from "/src/templates.js"

const project = await fetch("https://webapps.devspot.ca/getlatest/3").then(res => res.json())

const blog = await fetch("https://blog.devspot.ca/getlatest/3").then(res => res.json())

const site = await fetch("https://websites.devspot.ca/getlatest/3").then(res => res.json())

let data = await fetch("/src/data.json").then(res => res.json())

data = { ...data, project, blog, site }

const root = document.querySelector(".root")

root.innerHTML = home(data)



