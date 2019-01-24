// Code your solution in this file!

function distanceFromHqInBlocks(block){
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

 function distanceTravelledInFeet(block) {
   const blocks = distanceFromHqInBlocks(block);
   const feet = blocks * 264;
   return feet
 }

function distanceTravelledInFeet(start, destination) {
  return distanceTravelledInFeet(destination) - distanceTravelledInFeet(start);
}
