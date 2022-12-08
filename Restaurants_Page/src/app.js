const feedDisplay = document.querySelector('.feed1')
const feedDisplay2 = document.querySelector('.feed2')
const feedDisplay3 = document.querySelector('.feed3')
const feedDisplay4 = document.querySelector('.feed4')
const feedDisplay5 = document.querySelector('.feed5')
const feedDisplay6 = document.querySelector('.feed6')


let searchbar1 = document.getElementById("searchbar1");
let searchbar2 = document.getElementById("searchbar2");
let searchbar3 = document.getElementById("searchbar3");
let dataStore = []
let dataStore2 = []
let dataStore3 = []
let dataStore4 = []
let dataStore5 = []
let dataStore6 = []

getdata();
getdata2();
getdata3();
getdata4();
getdata5();
getdata6();



/*--------results1--------*/



function getdata(){
    fetch('http://localhost:8000/results1')
    
    .then((response) => {
        const data = response.json();
        return data;
    })
    .then((data) => {
        dataStore = data;
        feedDisplay.innerHTML =getHTML(data);
    });
}

function getHTML(data){
    return data.map(({Mtitle, Murl, Mreviews, Mcuisine, Mdesc1, Mdesc2, imageLink1, Manipalloc}) => generateHTML(Mtitle, Murl, Mreviews, Mcuisine, Mdesc1, Mdesc2, imageLink1, Manipalloc)).join('');
}

function generateHTML(Mtitle, Murl, Mreviews, Mcuisine, Mdesc1, Mdesc2, imageLink1, Manipalloc){
    return `<div id="eachBox"><div class="imagebox"> <img src="${imageLink1}"></div><div class="insideBox"><h3 class="rtitle"><a href="https://www.tripadvisor.in${Murl}">${Mtitle}</a></h3><p><span>Reviews:</span>${Mreviews}</p><p><span>Cuisine: </span>${Mcuisine}</p><p><span>Location: </span>${Manipalloc}</p><p><span>Feedback: </span>${Mdesc1}</p><p>${Mdesc2}</p></div></div>`;
}

function noResultHTML() {
    return "";
}




/*--------results2--------*/



function getdata2(){
    fetch('http://localhost:8000/results2')
    
    .then((response2) => {
        const data2 = response2.json();

        return data2;
    })
    .then((data2) => {
        dataStore2 = data2;
        feedDisplay2.innerHTML =getHTML2(data2);
    });
}

function getHTML2(data2){
    return data2.map(({mimageurl,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl}) => generateHTML2(mimageurl,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl)).join('');
}

function generateHTML2(mimageurl,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl){
    return `<div id="eachBox" ><div class="imagebox" id="imgBox" > <img src="${mimageurl}"/></div><div class="insideBox"><h3 class="rtitle"><a href="https://www.eazydiner.com${murl}">${mtitle}</a></h3><p><span>Rating:</span>${mrating}</p><p><span>Cuisine: </span>${mcuisine}</p><p><span>Location: </span>${mlocation}</p><p><a href="https://www.eazydiner.com/${mmenuurl}"><span style="text-decoration: underline;">View menu</span></a></p><p><a href="https://www.eazydiner.com/${mmapurl}"><span style="text-decoration: underline;">View on map</span></a></p></div></div>`;
}

function noResultHTML2() {
    return "";
}




/*--------results3--------*/


function getdata3(){
    fetch('http://localhost:8000/results3')
    
    .then((response3) => {
        const data3 = response3.json();
        return data3;
    })
    .then((data3) => {
        dataStore3 = data3;
        feedDisplay3.innerHTML =getHTML3(data3);
    });
}
function getHTML3(data3){
    return data3.map(({mimageurl,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl}) => generateHTML3(mimageurl,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl)).join('');
}

function generateHTML3(mimageurl,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl){
    return `<div id="eachBox" ><div class="imagebox" id="imgBox"  > <img src="${mimageurl}"/></div><div class="insideBox"><h3 class="rtitle"><a href="https://www.eazydiner.com${murl}">${mtitle}</a></h3><p><span>Rating:</span>${mrating}</p><p><span>Cuisine: </span>${mcuisine}</p><p><span>Location: </span>${mlocation}</p><p><a href="https://www.eazydiner.com/${mmenuurl}"><span style="text-decoration: underline;">View menu</span></a></p><p><a href="https://www.eazydiner.com/${mmapurl}"><span style="text-decoration: underline;">View on map</span></a></p></div></div>`;
}

function noResultHTML3() {
    return "";
}




/*--------results4--------*/



function getdata4(){
    fetch('http://localhost:8000/results4')
    
    .then((response4) => {
        const data4 = response4.json();
        return data4;
    })
    .then((data4) => {
        dataStore4 = data4;
        feedDisplay4.innerHTML =getHTML4(data4);
    });
}

function getHTML4(data4){
    return data4.map(({mimageLink2,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl}) => generateHTML4(mimageLink2,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl)).join('');
}

function generateHTML4(mimageLink2,mtitle, murl, mrating, mcuisine, mlocation, mmenuurl, mmapurl){
    return `<div id="eachBox" ><div class="imagebox" > <img src="${mimageLink2}"/></div><div class="insideBox"><h3 class="rtitle"><a href="https://www.eazydiner.com${murl}">${mtitle}</a></h3><p><span>Rating:</span>${mrating}</p><p><span>Cuisine: </span>${mcuisine}</p><p><span>Location: </span>${mlocation}</p><p><a href="https://www.eazydiner.com/${mmenuurl}"><span style="text-decoration: underline;">View menu</span></a></p><p><a href="https://www.eazydiner.com/${mmapurl}"><span style="text-decoration: underline;">View on map</span></a></p></div></div>`;
}

function noResultHTML4() {
    return "";
}



/*--------results5--------*/


function getdata5(){
    fetch('http://localhost:8000/results5')
    
    .then((response5) => {
        const data5 = response5.json();
        return data5;
    })
    .then((data5) => {
        dataStore5 = data5;
        feedDisplay5.innerHTML =getHTML5(data5);
    });
}

function getHTML5(data5){
    return data5.map(({bimageurl,btitle, burl, brating, bcuisine, blocation}) => generateHTML5(bimageurl,btitle, burl, brating, bcuisine, blocation)).join('');
}

function generateHTML5(bimageurl,btitle, burl, brating, bcuisine, blocation){
    return `<div id="eachBox" ><div class="imagebox" > <img src="${bimageurl}"/></div><div class="insideBox"><h3 class="rtitle"><a href="https://www.dineout.co.in${burl}">${btitle}</a></h3><p><span>Rating: </span>${brating}</p><p><span>Cuisine: </span>${bcuisine}</p><p><span>Location: </span>${blocation}</p></div></div>`;
}

function noResultHTML5() {
    return "";
}




/*--------results6--------*/


function getdata6(){
    fetch('http://localhost:8000/results6')
    
    .then((response6) => {
        const data6 = response6.json();
        return data6;
    })
    .then((data6) => {
        dataStore6 = data6;
        feedDisplay6.innerHTML =getHTML6(data6);
    });
}

function getHTML6(data6){
    return data6.map(({bimageurl,btitle, burl, brating, bcuisine, blocation}) => generateHTML6(bimageurl,btitle, burl, brating, bcuisine, blocation)).join('');
}

function generateHTML6(bimageurl,btitle, burl, brating, bcuisine, blocation){
    return `<div id="eachBox" ><div class="imagebox" > <img src="${bimageurl}"/></div><div class="insideBox"><h3 class="rtitle"><a href="https://www.dineout.co.in${burl}">${btitle}</a></h3><p><span>Rating: </span>${brating}</p><p><span>Cuisine: </span>${bcuisine}</p><p><span>Location: </span>${blocation}</p></div></div>`;
}

function noResultHTML6() {
    return "";
}









/*---------Search Filter------------*/

/*---------to search by name---------*/
searchbar1.addEventListener('keyup', (e) => {
    const currentword = e.target.value;
    const filteredData = dataStore.filter(o => o.Mtitle.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay.innerHTML = filteredData.length ? getHTML(filteredData) : noResultHTML();
    const filteredData2 = dataStore2.filter(o => o.mtitle.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay2.innerHTML = filteredData2.length ? getHTML2(filteredData2) : noResultHTML2();
    const filteredData3 = dataStore3.filter(o => o.mtitle.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay3.innerHTML = filteredData3.length ? getHTML3(filteredData3) : noResultHTML3();
    const filteredData4 = dataStore4.filter(o => o.mtitle.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay4.innerHTML = filteredData4.length ? getHTML4(filteredData4) : noResultHTML4();
    const filteredData5 = dataStore5.filter(o => o.btitle.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay5.innerHTML = filteredData5.length ? getHTML5(filteredData5) : noResultHTML5();
    const filteredData6 = dataStore6.filter(o => o.btitle.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay6.innerHTML = filteredData6.length ? getHTML6(filteredData6) : noResultHTML6();
});

/*-----------to search by location----------*/
searchbar2.addEventListener('keyup', (e) => {
    const currentword = e.target.value;
    const filteredData = dataStore.filter(o => o.Manipalloc.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay.innerHTML = filteredData.length ? getHTML(filteredData) : noResultHTML();
    const filteredData2 = dataStore2.filter(o => o.mlocation.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay2.innerHTML = filteredData2.length ? getHTML2(filteredData2) : noResultHTML2();
    const filteredData3 = dataStore3.filter(o => o.mlocation.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay3.innerHTML = filteredData3.length ? getHTML3(filteredData3) : noResultHTML3();
    const filteredData4 = dataStore4.filter(o => o.mlocation.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay4.innerHTML = filteredData4.length ? getHTML4(filteredData4) : noResultHTML4();
    const filteredData5 = dataStore5.filter(o => o.blocation.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay5.innerHTML = filteredData5.length ? getHTML5(filteredData5) : noResultHTML5();
    const filteredData6 = dataStore6.filter(o => o.blocation.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay6.innerHTML = filteredData6.length ? getHTML6(filteredData6) : noResultHTML6();
});

/*-------------to search by cuisine------------*/
searchbar3.addEventListener('keyup', (e) => {
    const currentword = e.target.value;
    const filteredData = dataStore.filter(o => o.Mcuisine.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay.innerHTML = filteredData.length ? getHTML(filteredData) : noResultHTML();
    const filteredData2 = dataStore2.filter(o => o.mcuisine.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay2.innerHTML = filteredData2.length ? getHTML2(filteredData2) : noResultHTML2();
    const filteredData3 = dataStore3.filter(o => o.mcuisine.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay3.innerHTML = filteredData3.length ? getHTML3(filteredData3) : noResultHTML3();
    const filteredData4 = dataStore4.filter(o => o.mcuisine.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay4.innerHTML = filteredData4.length ? getHTML4(filteredData4) : noResultHTML4();
    const filteredData5 = dataStore5.filter(o => o.bcuisine.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay5.innerHTML = filteredData5.length ? getHTML5(filteredData5) : noResultHTML5();
    const filteredData6 = dataStore6.filter(o => o.bcuisine.toLowerCase().includes(currentword.toLowerCase()));
    feedDisplay6.innerHTML = filteredData6.length ? getHTML6(filteredData6) : noResultHTML6();
});





/*
fetch('http://localhost:8000/results1')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox" style="background-image: url('+article.imageLink1+'); width: 30%; margin: 10px; opacity: 0.8;"><div class="insideBox"><h3 class="rtitle"><a href='+("https://www.tripadvisor.in/" +article.Murl) +'>' + article.Mtitle + '</a></h3><p><span>Reviews:</span> ' + article.Mreviews + '</p><p><span>Cuisine: </span>' + article.Mcuisine + '</p><p><span>Location: </span>Manipal</p><p><span>Feedback: </span>' + article.Mdesc1 + '</p><p>' + article.Mdesc2 + '</p></div></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })

fetch('http://localhost:8000/results2')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox" style="background-image: url('+article.mimageurl+'); width: 30%; margin: 10px; opacity: 0.8;"><div class="insideBox"><h3 class="rtitle"><a href='+("https://www.eazydiner.com/" +article.mbooktableurl) +'>' + article.mtitle + '</a></h3><p><span>Rating:</span>' + article.mrating + '</p><p><span>Cuisine: </span>' + article.mcuisine + '</p><p><span>Location: </span>' + article.mlocation + '</p><p><a href='+("https://www.eazydiner.com/" +article.mmenuurl) +'><span style="text-decoration: underline;">View menu</span></a></p><p><a href='+("https://www.eazydiner.com/" +article.mmapurl) +'><span style="text-decoration: underline;">View on map</span></a></p></div></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))
fetch('http://localhost:8000/results3')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox" style="background-image: url('+article.mimageurl+'); width: 30%; margin: 10px; opacity: 0.8;"><div class="insideBox"><h3 class="rtitle"><a href='+("https://www.eazydiner.com/" +article.mbooktableurl) +'>' + article.mtitle + '</a></h3><p><span>Rating: </span>' + article.mrating + '</p><p><span>Cuisine: </span>' + article.mcuisine + '</p><p><span>Location: </span>' + article.mlocation + '</p><p><a href='+("https://www.eazydiner.com/" +article.mmenuurl) +'><span style="text-decoration: underline;">View menu</span></a></p><p><a href='+("https://www.eazydiner.com/" +article.mmapurl) +'><span style="text-decoration: underline;">View on map</span></a></p></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))
fetch('http://localhost:8000/results4')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox" style="background-image: url('+article.imageLink2+'); width: 30%; margin: 10px; opacity: 0.8;"><div class="insideBox"><h3 class="rtitle"><a href='+("https://www.eazydiner.com/" +article.mbooktableurl) +'>' + article.mtitle + '</a></h3><p><span>Rating: </span>' + article.mrating + '</p><p><span>Cuisine: </span>' + article.mcuisine + '</p><p><span>Location: </span>' + article.mlocation + '</p><p><a href='+("https://www.eazydiner.com/" +article.mmenuurl) +'><span style="text-decoration: underline;">View menu</span></a></p><p><a href='+("https://www.eazydiner.com/" +article.mmapurl) +'><span style="text-decoration: underline;">View on map</span></a></p></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))*/
/*fetch('http://localhost:8000/results5')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox"><img src='+(article.bimageurl) +' alt="image" ><h3 class="rtitle"><a href='+("https://www.eazydiner.com/" +article.burl) +'>' + article.btitle + '</a></h3><p>Rating: ' + article.brating + '</p><p>Cuisine: ' + article.bcuisine + '</p><p>Location: ' + article.blocation + '</p></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))
fetch('http://localhost:8000/results6')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox"><img src='+(article.bimageurl) +' alt="image" ><h3 class="rtitle"><a href='+("https://www.eazydiner.com/" +article.burl) +'>' + article.btitle + '</a></h3><p>Rating: ' + article.brating + '</p><p>Cuisine: ' + article.bcuisine + '</p><p>Location: ' + article.blocation + '</p>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))*/

/*
fetch('http://localhost:8000/results5')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox" style="background-image: url('+article.bimageurl+'); width: 30%; margin: 10px; opacity: 0.8;"><div class="insideBox"><h3 class="rtitle"><a href='+("https://www.dineout.co.in" +article.burl) +'>' + article.btitle + '</a></h3><p><span>Rating: </span>' + article.brating + '</p><p><span>Cuisine: </span>' + article.bcuisine + '</p><p><span>Location: </span>' + article.blocation + '</p></div></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))
fetch('http://localhost:8000/results6')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div id="eachBox" style="background-image: url('+article.bimageurl+'); width: 30%; margin: 10px; opacity: 0.8;"><div class="insideBox"><h3 class="rtitle"><a href='+("https://www.dineout.co.in" +article.burl) +'>' + article.btitle + '</a></h3><p><span>Rating: </span>' + article.brating + '</p><p><span>Cuisine: </span>' + article.bcuisine + '</p><p><span>Location: </span>' + article.blocation + '</p></div></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        });
    })
    .catch(err => console.log(err))*/