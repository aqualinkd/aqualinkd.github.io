

  const navigateToUrl = (select) => {
    const url = select.value;
    url && (window.location.href = url);
  };



let gsMenu = [[ "TLDR - Quickstart", "/docs/" ], 
              [ "Connecting to Panel", "/docs/panelconnection.html" ],
              [ "Installation", "/docs/installation.html" ], 
              [ "Quick Configuration", "/docs/construction.html" ],
              [ "Radxa Kit: WiFi", "/docs/radxa-get-started.html" ],
             ];

let cfgMenu = [[ "Device ID's", "/docs/construction.html" ], 
               [ "MQTT", "/docs/construction.html" ], 
               [ "Reading & forcing RS485 devices", "/docs/construction.html" ], 
               [ "Scheduler", "/docs/construction.html" ], 
               [ "Miscellaneous", "/docs/construction.html" ], 
               [ "Buttons", "/docs/construction.html" ], 
               [ "Virtual Buttons", "/docs/construction.html" ], 
               [ "Lights", "/docs/construction.html" ], 
               [ "Sensors", "/docs/construction.html" ],
              ];

var menuitems = {};
menuitems["Getting Started"] = gsMenu;
menuitems["Configuration"] = cfgMenu;

//const pageName = currentPathname.split("/").slice(-2, -1).toString();
const currentPage = window.location.pathname;

try {
  const menu = document.getElementById('menu');

  let html = '<aside>';
  let found = false;

  for (const key in menuitems) {
    html += '<h4>'+key+'</h4>';
    html += '<ul>';
    for (i=0; i < menuitems[key].length; i++) {
      if (!found && (currentPage.toLowerCase() == menuitems[key][i][1].toLowerCase()) ) {
        found=true;
        html += '<li class="current"><a href="'+menuitems[key][i][1]+'">'+menuitems[key][i][0]+'</a></li>';
      } else {
        html += '<li><a href="'+menuitems[key][i][1]+'">'+menuitems[key][i][0]+'</a></li>';
      }
    }
    html += '</ul>';
  }
  html += '</aside>';
  menu.innerHTML = html;
} catch (e) {}


try {
  const mobmenu = document.getElementById('mobilemenu');
  let found = false;

  let html = '<select id="doc-nav" onchange="navigateToUrl(this)" aria-label="Select a page from the documentation">';
  html += '<option value="">Navigate the docs…</option>';

  for (const key in menuitems) {
    html += '<optgroup label="'+key+'">';
    for (i=0; i < menuitems[key].length; i++) {
      if (!found && (currentPage.toLowerCase() == menuitems[key][i][1].toLowerCase()) ) {
        found=true;
        //html += '<li class="current"><a href="'+menuitems[key][i][1]+'">'+menuitems[key][i][0]+'</a></li>';
        html += '<option value="'+menuitems[key][i][1]+'">'+menuitems[key][i][0]+'</option>';
      } else {
        html += '<option value="'+menuitems[key][i][1]+'">'+menuitems[key][i][0]+'</option>';
      }
    }
    html += '</optgroup>';
  }
  html += '</select>';
  mobmenu.innerHTML = html;
} catch (e) {}