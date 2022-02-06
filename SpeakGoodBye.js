//(function(window) {
 // var speakWord = "Good Bye";
 // var byeSpeaker = function (name) {
   //   console.log(speakWord + " " + name);
 // }
  
//  window.byeSpeaker = byeSpeaker;

//})(window);

(function(window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Bye";
  window.byeSpeaker = byeSpeaker;
}(window));