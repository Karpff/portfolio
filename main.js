window.addEventListener("load",_=>
{
    document.getElementsByTagName("body")[0].style.height = innerHeight+"px";

    let entries = "";
    let direction = "left";
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

    window.addEventListener("resize",resize);
    resize();
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