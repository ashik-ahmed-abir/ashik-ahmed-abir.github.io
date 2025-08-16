// Highlight active nav item based on current filename
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path){ a.classList.add("active"); }
  });
})();
