function onClick(event){
    if( event.target.id === "buttonA"){
        const div = event.target.parentNode;
        div.dispatchEvent ( new Event("click_a_button") );
    }
    else if( event.target.id === "buttonB"){
        const div = event.target.parentNode;
        div.dispatchEvent ( new Event("click_b_button") );
    }
}

function onClickA(event){
    console.log("clicked A button");
}

function onClickB(event){
    console.log("clicked B button");
}

function initListeners(){
    const div = document.querySelector("div");
    div.addEventListener("click", onClick);
    div.addEventListener("click_a_button", onClickA);
    div.addEventListener("click_b_button", onClickB);
}

function start(event){
    event.target.removeEventListener("load", start);
    initListeners();
}
window.addEventListener("load", start);