const RULES =  [
  {
    "id" : 1,
    "action" : { 
      "type" : "redirect",
      "redirect": {
        "url": "http://127.0.0.1:5173/dist/assets/index.js",
      },
    },
    "condition" : {
      "urlFilter": 'index-*.js',
      "resourceTypes" : ["script"]
    }
  },
  {
    "id" : 2,
    "action" : { 
      "type" : "redirect",
      "redirect": {
        "url": "http://127.0.0.1:5173/dist/assets/index.css",
      },
    },
    "condition" : {
      "urlFilter": 'index-*.css',
      "resourceTypes" : ["stylesheet"]
    }
  }
];

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules(
    {
      "removeRuleIds": RULES.map(r => r.id),
      "addRules": RULES,
    },
  );
});