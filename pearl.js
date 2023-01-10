const body = document.querySelector("body")
const MIN_DURATION = 10;

function makeSnowflake(){
    const snowflake = document.createElement("img");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();
    const duration = Math.random()*20 + MIN_DURATION;

    snowflake.src = 'https://yt3.googleusercontent.com/06Jm8oKJnTUrrtaf5JegLRFJvVcHx4iq0CHK3lIivyW1o3ApdWId3sSPugyOTj9264uSBiDx3w=s176-c-k-c0x00ffffff-no-rj';

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random()*window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    snowflake.style.animation = `fall ${duration}s linear`

    body.appendChild(snowflake);

    setTimeout(()=>{
        body.removeChild(snowflake);
        makeSnowflake()
    }, (duration + delay) * 1000);

}

for(let index = 0; index < 50; index++){
    setTimeout(makeSnowflake, 500 * index);
}
