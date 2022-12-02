/**
 * @name Avatar Button
 * @author CatGumba
 * @description Go to someones profile and click "Get Avatar" to open their Avatar in your default Webbrowser
 * @version 0.1.0
 */
var main;

 module.exports = class ExamplePlugin {
  load() {}    
  
  start() {
    let trg1 = false
    main = setInterval(function() {
      let btn = document.getElementsByClassName('relationshipButtons-pZ_UWl')[0]
      if(btn != undefined) {
        if(trg1 == false){
          let avatar = document.getElementsByClassName('focusLock-2tveLW')[0].getElementsByClassName('avatar-b5OQ1N')[0].src
          btn.insertAdjacentHTML('beforebegin', '<button type="button" class="actionButton-D1ZvXj button-f2h6uQ lookFilled-yCfaCM colorGreen-3y-Z79 sizeSmall-wU2dO- grow-2sR_-F" id="avatarlisten" style="margin-left: auto; margin-right: 6px;"><div class="contents-3ca1mk">Get Avatar</div></button>')
          document.getElementById("avatarlisten").addEventListener("click", function() {window.open(avatar, "_blank");BdApi.showToast('Opened Avatar')})
          trg1 = true
        }
      }else{trg1 = false}
    }, 200)
  }
  stop() {clearInterval(main)}
}