function playSound(e: KeyboardEvent) {
    const audio = document.querySelector<HTMLAudioElement>(`audio[data-key="${e.key}"]`)
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    if (key === null) return;
    key.classList.add("playing");
}

function removeTransition(e: TransitionEvent) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
