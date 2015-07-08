$( document ).ready(function(){

  initialize();

});

function initialize(){

  // materialize
  $(".button-collapse").sideNav();

}

function refresh(){
  //alert("JSで描画の更新をかけたい");
  // Materialize.toast(message, displayLength, className, completeCallback);
  Materialize.toast('JSで描画の更新をかけたい', 4000) // 4000 is the duration of the toast
}
