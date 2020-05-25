var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8069395e-6cb6-495d-9a32-c45e89fa4817","a9ff51e4-7d05-4757-b219-e9977e56ebed","c3d961bc-9b31-49fb-b766-f37892423f64","db68b787-7d8e-4b10-8d46-c488b0000df6","da02d9f2-2898-4452-be3e-20f7af46f47d"],"propsByKey":{"8069395e-6cb6-495d-9a32-c45e89fa4817":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"gb3_DVGBo1ryHMChJNZLnhRviJZEY1X4","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8069395e-6cb6-495d-9a32-c45e89fa4817.png"},"a9ff51e4-7d05-4757-b219-e9977e56ebed":{"name":"w1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8tKr_DzrTtoKlK4gWlRPneF3vq8AETcl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a9ff51e4-7d05-4757-b219-e9977e56ebed.png"},"c3d961bc-9b31-49fb-b766-f37892423f64":{"name":"w2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"cwjj3REaSPi33tq0dhmIePPSGRJozWmF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c3d961bc-9b31-49fb-b766-f37892423f64.png"},"db68b787-7d8e-4b10-8d46-c488b0000df6":{"name":"w3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XDTdgE5NVACnaDwcbF0_vVavUTVeGiBt","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/db68b787-7d8e-4b10-8d46-c488b0000df6.png"},"da02d9f2-2898-4452-be3e-20f7af46f47d":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"}}};
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

var bg = createSprite(200, 200);
bg.setAnimation("animation_2");
var rock = createSprite(300, 100);
rock.setAnimation("w1");
var sizor = createSprite(50, 100);
sizor.setAnimation("w2");
var paper = createSprite(200, 100);
paper.setAnimation("w3");
var ani = createSprite(295, 280);
ani.setAnimation("animation_1");
var comp = createSprite(105, 280);
comp.setAnimation("animation_1");
function draw() {
  if (mousePressedOver(rock)) {
    ani.setAnimation("w1");
    var s = randomNumber(1, 3);
    comp.setAnimation("w"+s);
    playSound("assets/default.mp3");
}
    if (mousePressedOver(sizor)) {
    ani.setAnimation("w2");
     var a = randomNumber(1, 3);
    comp.setAnimation("w"+a);
    playSound("assets/default.mp3")
  }
    if (mousePressedOver(paper)) {
    ani.setAnimation("w3");
     var g = randomNumber(1, 3);
    comp.setAnimation("w"+g);
    playSound("assets/default.mp3")
  }
  drawSprites();
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
