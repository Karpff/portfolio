var loaded = false;

window.addEventListener("load",async _=>
{
    document.getElementsByTagName("body")[0].style.height = innerHeight+"px";

    var counter = 0;

    setTimeout(_=>{document.getElementsByTagName("canvas")[0].style.display = "none";},10000)
    await new Promise((resolve,reject)=>
    {
        let img = document.createElement('img');
        img.src="bg.jpg";
        img.addEventListener("load",resolve);
    });
    document.getElementsByTagName("html")[0].style.background = "url(bg.jpg)";

    await new Promise((resolve,reject)=>
    {
        let entries = "";
        for(let i=0;i<data.top.length;i+=2)
        {
            entries += `
            <article><div class="row">
                <div class="photo"><a href="${data.top[i].link}"><div class="frame"><img src="RES/${data.top[i].img}"></div></a></div>
                <div class="description desc-right">${data.top[i].description}</div>
            </div></article>`;
            if(data.top[i+1])
            {
                entries += `
                <article><div class="row">
                <div class="photo"><a href="${data.top[i+1].link}"><div class="frame"><img src="RES/${data.top[i+1].img}"></div></a></div>
                    <div class="description desc-left">${data.top[i+1].description}</div>
                </div></article>`;
            }
        }
        document.getElementById("top-section").innerHTML+=entries;
        Array.from(document.images).forEach(img=>img.addEventListener('load',_=>{counter++;if(counter==document.images.length)resolve("Loaded")}));
    });
    document.getElementsByTagName("canvas")[0].style.display = "none";
    console.log("Top loaded");

    await new Promise((resolve,reject)=>
    {
        let entries = "";
        data.middle.forEach(e=>
        {
            entries += `<article><div class="description">${e.description}</div><div class="row">`
            e.imgs.forEach(i=>
            {
                entries += `<div class="photo"><img src="RES/${i}"></div>`;
            });
            entries += `</div></article>`
        }); 
        document.getElementById("middle-section").innerHTML = entries;
        Array.from(document.images).forEach(img=>img.addEventListener('load',_=>{counter++;if(counter==document.images.length)resolve("Loaded")}));
    });
    console.log("Middle loaded");

    await new Promise((resolve,reject)=>
    {
        entries = '<div class="row">';
        for(let i=0;i<data.bottom.length;i++)
        {
            entries += `
            <article>
                <div class="photo"><div class="photo"><a href="${data.bottom[i].link}"><div class="frame"><img src="RES/${data.bottom[i].img}"></div></a></div>
                <div class="description desc-right">${data.bottom[i].description}</div>
            </article>`;
        }
        entries+='</div>';
        document.getElementById("bottom-section").innerHTML+=entries;
        Array.from(document.images).forEach(img=>img.addEventListener('load',_=>{counter++;if(counter==document.images.length)resolve("All loaded")}));
    });
    console.log("Bottom loaded");    

    window.addEventListener("resize",resize);
    resize();
});

document.getElementsByClassName("container-md")[0].addEventListener("wheel",e=>
{
   e.preventDefault();
});

document.getElementsByTagName("body")[0].addEventListener("wheel",e=>
{  
    document.getElementsByClassName("container-md")[0].scrollTo(0,document.getElementsByClassName("container-md")[0].scrollTop+e.deltaY);
});

const resize = _=>
{
    document.getElementsByTagName("body")[0].style.height = innerHeight+"px";
    if(innerWidth < 768)
    {
        Array.from(document.getElementsByClassName("desc-left")).forEach(e=>
        {
            e.style.order = "3";
        });
    }
    else
    {
        Array.from(document.getElementsByClassName("desc-left")).forEach(e=>
        {
            e.style.order = "1";
        });
    }
    document.getElementsByClassName("shadow-inner")[0].style.height = document.getElementsByClassName("shadow-outer")[0].offsetHeight+"px";
    document.getElementsByClassName("shadow-inner")[0].style.width = document.getElementsByClassName("shadow-outer")[0].offsetWidth+"px";
}