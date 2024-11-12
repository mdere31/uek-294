const container = document.querySelector("h2 + div");
const main = document.getElementsByTagName("main")[0];
const body = document.getElementsByTagName("body")[0];
const songList = document.createElement("ul");
main.append(songList);

const buttonsContainer = document.createElement("div");
buttonsContainer.style.width = "100%";
buttonsContainer.style.display = "flex";
buttonsContainer.style.gap = "10px";

const addThreeButton = document.createElement("button");
addThreeButton.innerText = "Add three more";

const removeThreeButton = document.createElement("button");
removeThreeButton.innerText = "Remove first three";

buttonsContainer.append(addThreeButton);
buttonsContainer.append(removeThreeButton);

container.prepend(buttonsContainer);

const albumsContainer = document.getElementById("images_container");

// funktioniert nicht immer :(
/*
addThreeButton.addEventListener("click", () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("small_container");

  const albumImages = document.getElementsByTagName("img");

  for (i = 0; i < 3; i++) {
    const item = albumImages.item(Math.floor(Math.random()*6)).cloneNode();
    imageContainer.append(item);
  }

  albumsContainer.append(imageContainer);
});
*/

const songNames = [
  [
    "Dudu",
    "Gülümse Kaderine",
    "Sorma Kalbim",
    "Bu Şarkılar da Olmasa",
    "Uzun İnce Bir Yoldayım",
  ],
  [
    "Rindlerin Akşamı",
    "Söyleme Bilmesinler",
    "Nasıl Geçti Habersiz",
    "Kadehinde Zehir Olsa",
    "Sevmekten Kim Usanır",
  ],
  [
    "Hepsi Senin Mi?",
    "Unutmamalı",
    "Gül Döktüm Yollarına",
    "Kış Güneşi",
    "Dön Bebeğim",
  ],
  [
    "Şımarık",
    "İkimizin Yerine",
    "Ölürüm Sana",
    "Salına Salına Sinsice",
    "İnci Tanem",
  ],
  ["Yolla", "Beni Çok Sev", "Çok Ağladım", "Kedi Gibi", "Her Şey Fani"],
  ["Yo", "Şerbetli", "Sorma Gitsin", "Çınar", "Darmaduman"],
];

const header = document.getElementsByTagName("h2")[0];

const songHeader = document.createElement("h2");
songHeader.innerText = "Now Playing:";
songHeader.style.visibility = "hidden";

const songText = document.createElement("p");
songText.innerText = "";
songText.style.visibility = "hidden";

header.before(songHeader);
header.before(songText);

const showPlayingMusic = (song) => {
  const link = document.createElement("a");
  link.append(song);
  songList.append(link);

  link.addEventListener("click", () => {
    songHeader.style.visibility = "visible";
    songText.style.visibility = "visible";

    songText.innerText = song.innerText;
  });
};

const showAlbumsSongs = (link) => {
  link.addEventListener("click", () => {
    songList.replaceChildren();

    const listNumber = link.href.slice(link.href.length - 1, link.href.length);
    const songs = songNames.at(listNumber - 1);

    for (i = 0; i < 5; i++) {
      const songListItem = document.createElement("li");
      songListItem.innerText = songs.at(i);
      showPlayingMusic(songListItem);
    }
  });
};

const allLinks = document.getElementsByTagName("a");

for (i = 0; i < allLinks.length; i++) {
  showAlbumsSongs(allLinks.item(i));
}

const getThreeRandomAlbums = (container) => {
  for (i = 0; i < 3; i++) {
    const linkForImage = document.createElement("a");
    const img = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    img.src = `images/${randomNumber}.jfif`;
    linkForImage.href = `#${randomNumber}`;
    linkForImage.append(img);
    container.append(linkForImage);

    showAlbumsSongs(linkForImage);
  }
}

const addThreeAlbums = () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("small_container");

  getThreeRandomAlbums(imageContainer);

  albumsContainer.append(imageContainer);
}

addThreeButton.addEventListener("click", addThreeAlbums);

removeThreeButton.addEventListener("click", () => {
  albumsContainer.children[1].remove();

  songList.replaceChildren()
});

const randomizer = () => {
  const allAlbums = document.querySelectorAll(".small_container");

  for (let album of allAlbums) {
    album.replaceChildren()
    getThreeRandomAlbums(album)
  }
}

const randomizerButton = document.createElement("button");
randomizerButton.innerText = "Randomize Albums"

randomizerButton.addEventListener("click", randomizer);

buttonsContainer.append(randomizerButton)