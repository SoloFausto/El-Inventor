var vid = document.getElementById("backgroundVideo"); 
var inventory = document.getElementById("inventory");
// vid.play();

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
/// Mouse section start
$( function() {
  $( "#draggable" ).draggable({
    revert: true
  });
  $( "#draggable2" ).draggable({
    drag: function( event, ui) {

      if(elementsOverlap(inventory,ui.helper[0])){
       addToInventory(ui.helper[0],inventory);
        
      }
    },
    revert: true
  });
} );



/// Mouse section stop
function addToInventory(item,inventory){
  console.log(item);
  var currentSlot = document.getElementById("freeSlot");
  item.style = '';
  item.classList  = 'inventoryItem';
  item.id = '';
  currentSlot.appendChild(item);
  currentSlot.id = "slot";
  return true;

}

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}