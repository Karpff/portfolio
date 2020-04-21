window.addEventListener("load",async _=>
{
    document.getElementsByTagName("body")[0].style.height = innerHeight+"px";

    var counter = 0;

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
    console.log("Top loaded");

    await new Promise((resolve,reject)=>
    {
        document.getElementById("middle-section").innerHTML = `<article>
            <div class="description">${data.middle.description}</div>
            <div class="row">
                <div class="photo"><img src="RES/${data.middle.imgs[0]}"></div>
                <div class="photo"><img src="RES/${data.middle.imgs[1]}"></div>
                <div class="photo"><img src="RES/${data.middle.imgs[2]}"></div>
            </div>
        </article>` 
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

    // let entries = "";
    // for(let i=0;i<data.top.length;i+=2)
    // {
    //     entries += `
    //     <article><div class="row">
    //         <div class="photo"><a href="${data.top[i].link}"><div class="frame"><img src="RES/${data.top[i].img}"></div></a></div>
    //         <div class="description desc-right">${data.top[i].description}</div>
    //     </div></article>`;
    //     if(data.top[i+1])
    //     {
    //         entries += `
    //         <article><div class="row">
    //         <div class="photo"><a href="${data.top[i+1].link}"><div class="frame"><img src="RES/${data.top[i+1].img}"></div></a></div>
    //             <div class="description desc-left">${data.top[i+1].description}</div>
    //         </div></article>`;
    //     }
    // }
    // document.getElementById("top-section").innerHTML+=entries;
    // var counter = 0;
    // Array.from(document.images).forEach(img=>img.addEventListener('load',_=>
    // {
    //     counter++;
    //     console.log(counter);
    //     if(counter==document.images.length)
    //     {
    //        document.getElementById("middle-section").innerHTML = `<article>
    //             <div class="description">${data.middle.description}</div>
    //             <div class="row">
    //                 <div class="photo"><img src="RES/${data.middle.imgs[0]}"></div>
    //                 <div class="photo"><img src="RES/${data.middle.imgs[1]}"></div>
    //                 <div class="photo"><img src="RES/${data.middle.imgs[2]}"></div>
    //             </div>
    //         </article>` 

    //     }
    // }));
    // entries = '<div class="row">';
    // for(let i=0;i<data.bottom.length;i++)
    // {
    //     entries += `
    //     <article>
    //         <div class="photo"><div class="photo"><a href="${data.bottom[i].link}"><div class="frame"><img src="RES/${data.bottom[i].img}"></div></a></div>
    //         <div class="description desc-right">${data.bottom[i].description}</div>
    //     </article>`;
    // }
    // entries+='</div>';
    // document.getElementById("bottom-section").innerHTML+=entries;
    

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