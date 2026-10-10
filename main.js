(function(){
  var links=[].slice.call(document.querySelectorAll('.side nav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
  function update(){
    var y=window.scrollY+140,cur=0;
    secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i;});
    if(window.innerHeight+window.scrollY>=document.body.scrollHeight-4)cur=secs.length-1;
    links.forEach(function(a,i){a.classList.toggle('on',i===cur);});
    var on=links[cur];if(on&&window.innerWidth<=900){on.scrollIntoView({block:'nearest',inline:'center'});}
  }
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
})();
