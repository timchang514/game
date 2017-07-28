(function() {
  AFRAME.registerComponent('scene', {
    init: function() {
      let scene = document.querySelector('a-scene')
      let camera = document.querySelector('#test-box')
      const FWD = 0;
      const RIGHT = 1;
      const BACK = 2;
      const LEFT = 3;

      // Keyboard Controls
      window.addEventListener("keypress", function(e) {
        switch(e.which) {
          case 119: // Forward
            impulse(FWD);
            break;
          case 100: // Right
            impulse(RIGHT);
            break;
          case 115: // Back
            impulse(BACK);
            break;
          case 97:  // Left
            impulse(LEFT);
            break;
          default:
            break;
        }
      })

      window.addEventListener("keyup", function(e) {
        impulse()
      })

      // Movement in dir
      let impulse = function(dir) {
        switch(dir) {
          case FWD:
            camera.body.velocity.set(0, 0, -1)
            break;
          case RIGHT:
            camera.body.velocity.set(1, 0, 0)
            break;
          case BACK:
            camera.body.velocity.set(0, 0, 1)
            break;
          case LEFT:
            camera.body.velocity.set(-1, 0, 0)
            break;
          default:
            console.log("error: unexpected input for impulse, got " + dir)
            camera.body.velocity.set(0, 0, 0)
            break;
        }
      }
    }
  });
})();


// Gain momentum on allowed surfaces
// Lose if you touch bad surfaces
// Low gravity
