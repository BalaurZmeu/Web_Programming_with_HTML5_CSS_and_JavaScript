/******************************************************************
* navigation.js
* John Dean
*
* this code adds a heading, header, and footer navigation buttons
* to the web page being loaded
******************************************************************/

function createHeaderFooter() {
  var h1 = document.createElement("h1");
  var header = document.createElement("header");
  var footer = document.createElement("footer");
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  var li;
  
  h1.innerHTML = "Microgrid Development in Lawrence KS";
  header.appendChild(h1);
  li = getli("power_history.html",
    "Electric Power History");
  ul.appendChild(li);
  li = getli("lawrence_hydropower.html",
    "Lawrence Hydropower");
  ul.appendChild(li);
  li = getli("area_description.html",
    "<strong>Area Description</strong>");
  ul.appendChild(li);
  li = getli("microgrid_possibilities.html",
    "Microgrid Possibilities");
  ul.appendChild(li);
  li = getli("typical_property.html",
    "Typical Property");
  ul.appendChild(li);
  li = getli("local_energy.html",
    "Local Energy");
  ul.appendChild(li);
  li = getli("collector_performance_2.html",
    "Collector Performance");
  ul.appendChild(li);
  li = getli("services.html",
    "Electric Power Services");
  ul.appendChild(li);
  li = getli("downtown_properties.html",
    "Downtown Properties");
  ul.appendChild(li);
  li = getli("solar_shadowing.html",
    "Solar Shadowing");
  ul.appendChild(li);
  nav.appendChild(ul);
  header.appendChild(nav);
  document.body.insertBefore(header, document.body.childNodes[0]);
  nav = document.createElement("nav"); // for another nav element
  ul = document.createElement("ul");   // for another unordered list
  li = getli("#", "Top");
  ul.appendChild(li);
  li = getli("area_description.html", "Home");
  ul.appendChild(li);
  nav.appendChild(ul);
  footer.appendChild(nav);
  document.body.appendChild(footer);
} // end createHeaderFooter

function getli(ref, label) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  
  a.setAttribute("href", ref);
  a.innerHTML = label;
  li.appendChild(a); // insert <a> into <li>
  return li;
} // end getli
