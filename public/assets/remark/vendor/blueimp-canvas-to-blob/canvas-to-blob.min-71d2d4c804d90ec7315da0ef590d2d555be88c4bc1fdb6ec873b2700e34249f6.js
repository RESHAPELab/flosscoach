!function(t){"use strict";var e=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,n=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),o=n&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),r=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,i=(n||r)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,i,l,u,B,b,c,f,d;if(e=t.match(a),!e)throw new Error("invalid data URI");for(i=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),l=!!e[4],u=t.slice(e[0].length),B=l?atob(u):decodeURIComponent(u),b=new ArrayBuffer(B.length),c=new Uint8Array(b),f=0;f<B.length;f+=1)c[f]=B.charCodeAt(f);return n?new Blob([o?c:b],{type:i}):(d=new r,d.append(b),d.getBlob(i))};t.HTMLCanvasElement&&!e.toBlob&&(e.mozGetAsFile?e.toBlob=function(t,n,o){t(o&&e.toDataURL&&i?i(this.toDataURL(n,o)):this.mozGetAsFile("blob",n))}:e.toDataURL&&i&&(e.toBlob=function(t,e,n){t(i(this.toDataURL(e,n)))})),"function"==typeof define&&define.amd?define(function(){return i}):t.dataURLtoBlob=i}(window);
