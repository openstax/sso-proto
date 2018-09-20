const

document.addEventListener("turbolinks:load", () => {
  var b = document.cookie.match('(^|;)\\s*ox-prod\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
  debugger
  // for(var i=0;i < ca.length;i++) {
  //   var c = ca[i];
  //   while (c.charAt(0)==' ') c = c.substring(1,c.length);
  //   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  // }
  return null;

})
