window.myApp = {
    openDocs: () => {
        Neutralino.app.open({
            url: "https://neutralino.js.org/docs"
        });
    },
    onClickOne: () => {
      let value = document.querySelector('#num').value;
      if (!isNaN(value) ){
        let res_block = document.querySelector('#res');
        res_block.innerHTML = Math.sqrt(value);
      }
    },
    onClickTwo: () => {
        let num = document.querySelector("#num-two").value;
        let step = document.querySelector("#step").value;
        if (num > -1000 && step < 1000000){
            console.log(num, step)
            let res_block = document.querySelector("#res-two");
            res_block.innerHTML = Math.pow(num, step)
        }
    }
};

Neutralino.init();
window.myApp.setTray();
window.myApp.showInfo();
