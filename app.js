console.log("Let's get this party started!");
//http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym



async function getRandomImg() {
    const res = await axios.get("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
    i= Math.floor(Math.random() * 50);
      console.log(res.data);
      console.log(res.data.data[i].images.preview_gif.url);
      const gif = document.querySelector("#images");

      let p = document.createElement('img');
      p.src = res.data.data[i].images.downsized_medium.url;
      gif.append(p);
  }


  const form = document.querySelector('#search');
form.addEventListener("submit", function(e){
    e.preventDefault();
    getRandomImg();
})
  const forma = document.querySelector('#Delete');
forma.addEventListener("submit", function(e){
    e.preventDefault();
    
    const gif = document.querySelector("#images");
    gif.remove();
    let g = document.createElement('div');
    g.setAttribute("id", "images");
    const main = document.querySelector("#main")
    main.append(g)
})