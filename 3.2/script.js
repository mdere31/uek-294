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

const showAlbumsSongs = (link) => {
  link.addEventListener("click", () => {
    songList.replaceChildren();

    const listNumber = link.href.slice(link.href.length-1, link.href.length);
    console.log(listNumber)
    const songs = songNames.at(listNumber-1)
    console.log(songs)
    for(i = 0; i < 5; i++) {
      const a = document.createElement("li");
      a.innerText = songs.at(i)
      songList.append(a);
    }
  })
};

const allLinks = document.getElementsByTagName("a");

for (i = 0; i < allLinks.length; i++) {
  showAlbumsSongs(allLinks.item(i));
}

addThreeButton.addEventListener("click", () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("small_container");

  for (i = 0; i < 3; i++) {
    const linkForImage = document.createElement("a");
    const img = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    img.src = `images/${randomNumber}.jfif`;
    linkForImage.href = `#${randomNumber}`
    linkForImage.append(img);
    imageContainer.append(linkForImage);

    showAlbumsSongs(linkForImage);
  }

  albumsContainer.append(imageContainer);
});

removeThreeButton.addEventListener("click", () => {
  albumsContainer.children[1].remove();
});

// 4 und 5 noch nicht gemacht