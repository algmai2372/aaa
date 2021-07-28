var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(10, 10, 15, 15);
var taca = createSprite(390, 385, 15, 25);
var parede1 = createSprite(80, 25, 15, 150);
var parede2 = createSprite(50, 150, 150, 15);
var parede3 = createSprite(180, 75,  15, 150);
var parede4 = createSprite(150, 200, 425, 15);
var parede5 = createSprite(250, 250, 450, 15);
var parede6 = createSprite(250, 80, 15, 180);
var parede7 = createSprite(350, 140, 150, 15);
var parede8 = createSprite(2, 305, 450, 15);
var parede9 = createSprite(370, 340, 225, 15);
var parede10 = createSprite(250, 322, 15, 50);
var parede11 = createSprite(90, 390, 15, 50);
var parede12 = createSprite(90, 323, 15, 46);
var parede13 = createSprite(250, 390, 15, 40);



function draw() {
  
  background('green');
  
  createEdgeSprites();
  
  drawSprites();
  
  sofia.bounceOff(edges);
  
  sofia.shapeColor = ("purple");
  taca.shapeColor = ("yellow");
 parede1.shapeColor = ("brown");
 parede2.shapeColor = ("brown");
  parede3.shapeColor = ("brown");
  parede4.shapeColor = ("brown");
  parede5.shapeColor = ("brown");
 parede6.shapeColor = ("brown");
 parede7.shapeColor = ("brown");
  parede8.shapeColor = ("brown");
  parede9.shapeColor = ("brown");
  parede10.shapeColor = ("brown");
 parede11.shapeColor = ("brown");
  parede12.shapeColor = ("brown");
  parede13.shapeColor = ("brown");
  
 if (keyWentDown(LEFT_ARROW)) {
 sofia.velocityX=-5;
  }
  
  if (keyWentDown(RIGHT_ARROW)) {
 sofia.velocityX=5;
  }
  
   if (keyWentDown(DOWN_ARROW)) {
 sofia.velocityY=5;
  }
  
   if (keyWentDown(UP_ARROW)) {
 sofia.velocityY=-5;
  }
  
    if (keyWentUp(UP_ARROW)) {
 sofia.velocityY=0;
  }
  
    if (keyWentUp(DOWN_ARROW)) {
 sofia.velocityY=0;
  }
  
    if (keyWentUp(RIGHT_ARROW)) {
 sofia.velocityX=0;
  }
  
    if (keyWentUp(LEFT_ARROW)) {
 sofia.velocityX=0;
  }
  
  sofia.bounceOff(parede1);
  sofia.bounceOff(parede2);
  sofia.bounceOff(parede3);
  sofia.bounceOff(parede4);
  sofia.bounceOff(parede5);
  sofia.bounceOff(parede6);
sofia.bounceOff(parede7);
  sofia.bounceOff(parede8);
  sofia.bounceOff(parede9);
  sofia.bounceOff(parede10);
  sofia.bounceOff(parede11);
  sofia.bounceOff(parede12);
  sofia.bounceOff(parede13);
  
  
  textSize(50);
  
  if (sofia.isTouching(taca)) {
  text("PARABENS", 70, 200);
  }
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
