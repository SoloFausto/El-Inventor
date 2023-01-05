var vid = document.getElementById("backgroundVideo"); 

vid.play();


function changeSrc(videoFile,videoContainerId,videoSourceId){
  console.log(typeof videoContainer);
  var videoContainer = document.getElementById(videoContainerId);
  videoContainer.pause();
  $(videoContainer).remove();
  var videoChanged =  ` 
  <video  id="`+videoContainerId+`" muted>
    <source id="`+videoSourceId+`" src="`+videoFile+`" type="video/mp4">
  </video>`;
  $("body").append(videoChanged);
  var videoContainerChanged = document.getElementById(videoContainerId);
  videoContainerChanged.play();
  return null;
}




let currentDroppable = null;
var ball = document.getElementById("ball");
 var ballInitialX = ball.getBoundingClientRect().left;
 var ballInitialY = ball.getBoundingClientRect().top;
     ball.onmousedown = function(event) {

       let shiftX = event.clientX - ball.getBoundingClientRect().left;
       let shiftY = event.clientY - ball.getBoundingClientRect().top;

       ball.style.position = 'absolute';
       ball.style.zIndex = 1000;
       document.body.append(ball);

       moveAt(event.pageX, event.pageY);

       function moveAt(pageX, pageY) {
         ball.style.left = pageX - shiftX + 'px';
         ball.style.top = pageY - shiftY + 'px';
       }

       function onMouseMove(event) {
         moveAt(event.pageX, event.pageY);

         ball.hidden = true;
         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
         ball.hidden = false;

         if (!elemBelow) return;

         let droppableBelow = elemBelow.closest('.droppable');
         if (currentDroppable != droppableBelow) {
           if (currentDroppable) { // null when we were not over a droppable before this event
             leaveDroppable(currentDroppable);
           }
           currentDroppable = droppableBelow;
           if (currentDroppable) { // null if we're not coming over a droppable now
             // (maybe just left the droppable)
             enterDroppable(currentDroppable);
           }
         }
       }

       document.addEventListener('mousemove', onMouseMove);

       ball.onmouseup = function() {
         document.removeEventListener('mousemove', onMouseMove);
         if (currentDroppable){ // If we leave the object inside the inventory
          $(ball).remove();
          leaveDroppable(currentDroppable);
         }
         else {
          moveAt(ballInitialX,ballInitialY);
         }
         ball.onmouseup = null;
       };

     };

     function enterDroppable(elem) {
       elem.style.background = 'pink';
     }

     function leaveDroppable(elem) {
       elem.style.background = '';
     }

     ball.ondragstart = function() {
       return false;
     };