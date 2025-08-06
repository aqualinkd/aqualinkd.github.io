

  const navigateToUrl = (select) => {
    const url = select.value;
    url && (window.location.href = url);
  };


let kitMenu = [
               [ "Radxa Kit: Start", "/docs/radxa-kit-get-started.html" ],
               [ "Connecting to Panel", "/docs/radxa-kit-panelconnection.html" ],
               [ "Configure WiFi", "/docs/radxa-kit-wifi.html" ],
               [ "AqualinkD Configuration", "/docs/radxa-kit-configuration.html" ],
               [ "Installing Mobile App", "/docs/radxa-kit-web-app.html"],
              ];

let gsMenu = [[ "TLDR - Quickstart", "/docs/" ], 
              [ "Connecting to Panel", "/docs/panelconnection.html" ],
              [ "Installation", "/docs/installation.html" ], 
              [ "Mobile App", "/docs/web-app.html"],
              //[ "Quick Configuration", "/docs/construction.html" ],
             ];

let cfgMenu = [[ "Configuration", "/docs/opening-config.html" ],
               [ "Device ID's", "/docs/device-ids.html" ], 
               [ "Buttons / Circuits", "/docs/buttons.html" ], 
               [ "Variable Speed Pumps", "/docs/variable-speed-pumps.html" ], 
               [ "Lights", "/docs/lights.html" ], 
               [ "Reading RS485 devices", "/docs/reading-devices.html" ],
               [ "Home Automation MQTT", "/docs/MQTT.html" ], 
               [ "Scheduler", "/docs/scheduler.html" ], 
               [ "Miscellaneous", "/docs/miscellaneous.html" ],    
               [ "Virtual Buttons", "/docs/virtual-buttons.html" ],
               [ "External Sensors", "/docs/sensors.html" ],
               [ "Serial Logger", "/docs/serial-logger.html" ],
              ];

var menuitems = {};
menuitems["AqualinkD Kit"] = kitMenu;
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