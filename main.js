(function(){
  var links=[].slice.call(document.querySelectorAll('.side nav a'));
  var nav=document.querySelector('.side nav');
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
  function update(){
    var mobile=window.innerWidth<=900;
    var y=window.scrollY+(mobile?90:140),cur=0;
    secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i;});
    if(window.innerHeight+window.scrollY>=document.body.scrollHeight-4)cur=secs.length-1;
    links.forEach(function(a,i){a.classList.toggle('on',i===cur);});
    var on=links[cur];
    // scroll the nav strip itself; scrollIntoView would also move the page and cancel anchor jumps
    if(on&&mobile&&nav){nav.scrollLeft=on.offsetLeft-(nav.clientWidth-on.offsetWidth)/2;}
  }
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
})();
