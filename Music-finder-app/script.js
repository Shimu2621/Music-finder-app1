    // const songSearch = document.getElementById("song-search");
    const searchBtn = document.getElementById("search-btn");
    const searchResult = document.getElementById("searchResult");
    

    searchBtn.addEventListener("click", () => {
        const songSearch = document.getElementById("song-search").value;
        console.log(songSearch);

        fetch(`https://api.lyrics.ovh/suggest/${songSearch}`)
        .then(response => response.json())
        .then(data => {
           searchResult.innerHTML = "";
           for(let i = 0; i < 5; i++) {
            //const element = 5;
            console.log(data.data);
            const songName = data.data[i].title;
            const albumBy = data.data[i].artist.name;
            //console.log(songName, albumName);
            searchResult.innerHTML +=`<div>
            <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-6">
                        <h3 id="songName" class="song-name">${songName}</h3>
                        <p class="album-name">Album by <span id="albumName">${albumBy}</span></p>
                    </div>
                </div>`
    
           }
           
        })
        .catch(error => alert('Not Found'))
    })


  

      

 


