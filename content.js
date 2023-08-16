const tooltip = '*** Your Dev Tool is on ***';
const label = document.createElement('div');
label.style.cssText = 'position:fixed;top:0;right:0;background:orange;color:white;padding:0 12px;z-index:1000';
label.innerHTML = '[Redirect Tool On]';
label.setAttribute('title', tooltip);
document.body.appendChild(label);
