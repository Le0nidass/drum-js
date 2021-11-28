window.addEventListener('keydown', function (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop function

    audio.currentTime = 0; // rewind start
    audio.play();

    key.classList.add('playing');
    // this.setTimeout(function(){

    // }, 0.07)

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition ));

});