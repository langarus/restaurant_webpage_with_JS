import _ from 'lodash';
import {createServices} from './services';
import {createNavBar} from './navbar'
import {createProjects} from './projects'
import {createAbout} from './about'
import {createStyle} from './createStyle'


//-clears Output
function clear(){
    let contentDiv = document.querySelector("#content")    
    contentDiv.innerHTML=""}

///------------
document.addEventListener("DOMContentLoaded", () => {
createStyle()
createNavBar()

const logo = document.querySelector(".logo")
logo.addEventListener("click", clear)

//when clicking "services" will return the page
const services = document.querySelector("#services")
services.addEventListener("click", () => {
    clear()
    createServices()
})
//when clicking projects will return its page
const projects = document.querySelector("#projects")
projects.addEventListener("click", () => {
    clear()
    createProjects()
})

const about = document.querySelector("#about")
about.addEventListener("click", () => {
    clear()
    createAbout()
})
});