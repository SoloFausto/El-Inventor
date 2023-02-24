var vid = document.getElementById("backgroundVideo"); 
var inventory = document.getElementById("inventory");
var draggableItem = document.getElementById("draggable0");
var freeSlot = document.getElementsByClassName("freeslot");

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

const position = { x: 0, y: 0 }

interact(draggableItem).draggable({
  listeners: {
    move (event) {
      position.x += event.dx
      position.y += event.dy
      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
        if(elementsOverlap(inventory,event.target)){
          console.log("okok");
        }
    },
    end (event){
      if(elementsOverlap(inventory,event.target)){
        addToInventory(event.target,inventory);
      };
    },
  }
})





/// Mouse section stop
function addToInventory(item,inventory){
  var currentSlot = document.getElementById("freeSlot");
  var newItem = item.cloneNode(true);
  item.parentNode.replaceChild(newItem,item);
  newItem.style = '';
  newItem.id = 'inventoryItem';
  currentSlot.appendChild(newItem);
  currentSlot.id = "slot";

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