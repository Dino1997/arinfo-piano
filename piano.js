function playMusic(son) {
  const note = new Audio("assets/son/" + son + ".wav");
  note.play();
}
// const playMusic = son => new Audio("assets/son/" + son + ".wav").play();

document.addEventListener("keydown", function(event) {
  console.log(event);
  if (event.keyCode === 68) {
    playMusic("do");
  }
  if (event.keyCode === 70) {
    playMusic("re");
  }
  if (event.keyCode === 71) {
    playMusic("mi");
  }
  if (event.keyCode === 72) {
    playMusic("fa");
  }
  if (event.keyCode === 74) {
    playMusic("sol");
  }
  if (event.keyCode === 75) {
    playMusic("la");
  }
  if (event.keyCode === 76) {
    playMusic("si");
  }
  if (event.keyCode === 77) {
    playMusic("do-octave");
  }
});
