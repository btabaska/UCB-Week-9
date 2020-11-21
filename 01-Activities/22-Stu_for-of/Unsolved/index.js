const songs = document.getElementById("songs").children;
for (let song of songs) {
  song.setAttribute("class", "red");
}
