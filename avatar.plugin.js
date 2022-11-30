/**
 * @name GetAvatar
 * @author CatGumba
 * @description Type .avatar to get the Profile Picture of the person you're talking to!
 * @version 0.0.1
 */
var main;

 module.exports = class ExamplePlugin {
  load() {}    
  
  start() {
    BdApi.showToast('GetAvatar enabled')
    let tr1 = true
    let avatar
    main = setInterval(function() {
    try{
      avatar = document.getElementsByClassName("interactiveSelected-29CP8y")[0].getElementsByClassName("avatar-b5OQ1N")[0].src
      avatar = avatar.replace('size=48', 'size=1024')
    } catch{
      avatar = null
    }
    let a = document.querySelector("span[data-slate-string]");
    if(a!=null||a!=undefined){
      var UserTyping= a.textContent
      if(UserTyping!=undefined){
        if(UserTyping.startsWith(".avatar")){
          if(tr1 == true){
            if(avatar!=null){
              window.open(avatar, '_blank');
              BdApi.showToast("Opened Avatar")
            }else{BdApi.showToast("No Avatar to open")}
          }
          tr1 = false
        }else{
          tr1 = true
        }
      }
    }

  }, 300)
}
  stop() {clearInterval(main)}
}