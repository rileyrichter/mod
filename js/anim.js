window.onload = function(){

    var ua=window.navigator.userAgent, msie=ua.indexOf('MSIE '), trident=ua.indexOf('Trident/');

    // initial settings
    if (msie>0 || trident>0){ //dumb it down for IE11 and earlier
      gsap.timeline()
      .set('.svg-centered', {x:document.body.clientWidth/2})
      .set('.hero-logo', {position:'absolute', top:150, left:'50%', x:-104})
      .set('#logo-txt', {y:15})
      .set('#logo-shadow', {y:1.5})
      .set('#prog-path', {opacity:0})
      .set('.footer-bg', {opacity:1})
      // .set('.footer-bg-color', {background:'#FF649C'})
      .set('svg', {opacity:1})  
    }
    else {
      gsap.timeline({onComplete:initAnim})
      .set('.svg-centered', {x:document.body.clientWidth/2})
      .set('#logo-txt', {y:33})
      .set('#logo-shadow', {y:1.5})
      .set('.blobs g', {opacity:0.4})
      .set('#dots circle', {transformOrigin:'center', scale:0})
      .set('svg', {opacity:1})
      
      document.querySelector('.hero-logo').onclick = function(){
        gsap.to(window, {scrollTo:0, ease:'power3', duration:0.7})
      }
    }

    window.onresize = function(){
      gsap.set('.svg-centered', {x:document.body.clientWidth/2})
    }

    function initAnim(){
        
      gsap.timeline({defaults:{duration:15}}) // floating blobs in hero-section
          .from("#header-blob1", {x:50, y:20, rotate:4}, 0)
          .from("#header-blob2", {y:40, rotate:2}, 0)
          .from("#header-blob3", {y:66, rotate:5}, 0)
          .from("#header-blob4", {y:40, rotate:-1}, 0)
          .from("#header-blob5", {y:-30, rotate:1}, 0)
          .from("#header-blob6", {y:50, rotate:2}, 0)  
      
      ScrollTrigger.matchMedia({
        
        "(max-width: 767px)":function(){ //mobile scroll triggers
          
          // logo on mobile is not fixed + doesn't change to "m" ball
          gsap.set('.hero-logo', {position:'absolute', top:150, left:'50%', x:-104})
          gsap.set('#prog-path', {opacity:0})
          gsap.set('#blobs1', {x:-80})
          gsap.set('#blobs2', {x:150})
          gsap.set('#blobs5', {x:-300, y:-120})
          gsap.set('#blobs6', {x:150, y:-190})
          gsap.set('#blobs7', {x:-280, y:-180})
          
          gsap.timeline({ 
                scrollTrigger:{trigger:".timeline-section", start:"top 25%", end:"bottom bottom-=450px", scrub:0.5}
            })
            .set('.blobs g clipPath path', {transformOrigin:'center'})
            
            .to('#blobs1 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.15][i]}, rotate:function(i){return [12,-19,-12][i]}}, 0.4)
            .to('#blobs1 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 0.4)

            .to('#blobs2 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.15,1.1][i]}, rotate:function(i){return [12,-10,-15,20][i]}}, 1.4)
            .to('#blobs2 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 1.4)
            
            // .to('#blobs3 g clipPath path', {duration:1.7, scale:function(i){return [1.15,1.3][i]}, rotate:function(i){return [-10,15][i]}}, 3.3)
            // .to('#blobs3 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:-0.1}, 3.3)

            // .to('#blobs4 g clipPath path', {duration:1.7, scale:function(i){return [1.4,1.3,1.15,1.3][i]}, rotate:function(i){return [20,-15,-30,50][i]}}, 4.4)
            // .to('#blobs4 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 4.4)

            .to('#blobs5 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.15,1.1,1.05][i]}, rotate:function(i){return [20,-15,-30,10,-20][i]}}, 4.5)
            .to('#blobs5 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 4.5)

            .to('#blobs6 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.25,1.15][i]}, rotate:function(i){return [12,-15,-20,12][i]}}, 7.5)
            .to('#blobs6 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 7.5)

            .to('#blobs7 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.25][i]}, rotate:function(i){return [12,-15][i]}}, 8.8)
            .to('#blobs7 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 8.8)

            .to('#blobs8 g clipPath path', {duration:1, scale:function(i){return [1.2,1.15][i]}, rotate:function(i){return [-12,-25][i]}}, 9)
            .to('#blobs8 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 9)
          
          //fade footer background colors
          // gsap.timeline({
          //       scrollTrigger:{trigger:".footer-section", start:"top 20%", end:"bottom bottom", scrub:0.1}
          //   })
          //   .to('.footer-bg', {opacity:1, ease:'power2.inOut'}, 0)
          //   .to('.footer-bg-noise', {duration:3, y:'-=100vh', ease:'sine.inOut'}, 0)
          //   .fromTo('.footer-bg-color', {background:'#FF649C'},{duration:1, background:'#FFB864', ease:'none'}, 1)
          //   .to('.footer-bg-color', {duration:1, background:'#E9FF64', ease:'none'}, 2) 
        },
        
        "(min-width: 768px)":function(){ //desktop scroll triggers
          
          // fixed position logo, shifts upward on downward scroll
          gsap.set('.hero-logo', {position:'fixed', top:150, left:'50%', x:-104})
          gsap.timeline({ 
                scrollTrigger:{trigger:".hero-section", start:40, end:600, scrub:0}
            })
            .to('.hero-logo', {y:-111, ease:'power1.inOut'})
          
          //logo tranform to "m" ball
          gsap.timeline({ 
                paused:true,
                scrollTrigger:{trigger:".hero-section", start:180, end:181, toggleActions:"play none reverse none", fastScrollEnd:true}
            })
            .to('.txt_m', {x:79, ease:'expo.inOut'}, 0)
            .to('.txt_odulo', {duration:0.3, opacity:0}, 0)
            .to('.txt_odulo', {x:-40, ease:'expo.inOut'}, 0)
            .to('.txt_m', {duration:0.8, scale:0.72, transformOrigin:'center', ease:'expo'}, 0.25)
            .fromTo('.logo-ball', {duration:0.8, scale:0.5, transformOrigin:'center'}, {scale:1, opacity:1, ease:'expo'}, 0.25)

          //fill long winding path, animate parts along the way
          gsap.set('#prog-path', {drawSVG:0, opacity:1})
          gsap.timeline({ 
                scrollTrigger:{trigger:".timeline-section", start:"top 30%", end:"bottom bottom-=150px", scrub:0.5},
                // onUpdate:()=>console.log(mainST.time())
            })
            .set('.blobs g clipPath path', {transformOrigin:'center'})
            .set('.blobs', {clearProps:true})//fixes issues that arise when moving back and forth from mobile to desktop viewport sizes
            .to('#prog-path', {duration:10, drawSVG:'100%', ease:'none'}, 0)

            .to('#c0', {duration:0.2, scale:1, transformOrigin:'center', ease:'power3'}, 0.85)
            .to('#blobs1 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.15][i]}, rotate:function(i){return [12,-19,-12][i]}}, 0.8)
            .to('#blobs1 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 0.8)

            .to('#c1', {duration:0.2, scale:1,  ease:'power3'}, 1.45)
            .to('#blobs2 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.15,1.1][i]}, rotate:function(i){return [12,-10,-15,20][i]}}, 1.4)
            .to('#blobs2 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 1.4)
            .to('#c2', {duration:0.2, scale:1, ease:'power3'}, 1.61)
            .to('#c3', {duration:0.2, scale:1, ease:'power3'}, 2.17)    

            .to('#c4', {duration:0.2, scale:1, ease:'power3'}, 3.33)
            .to('#blobs3 g clipPath path', {duration:1.7, scale:function(i){return [1.15,1.3][i]}, rotate:function(i){return [-10,15][i]}}, 3.3)
            .to('#blobs3 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:-0.1}, 3.3)

            .to('#c5', {duration:0.2, scale:1, ease:'power3'}, 4.12)
            .to('#c6', {duration:0.2, scale:1, ease:'power3'}, 4.5)
            .to('#blobs4 g clipPath path', {duration:1.7, scale:function(i){return [1.4,1.3,1.15,1.3][i]}, rotate:function(i){return [20,-15,-30,50][i]}}, 4.4)
            .to('#blobs4 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 4.4)

            .to('#c7', {duration:0.2, scale:1, ease:'power3'}, 5.45)
            .to('#blobs5 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.3,1.15,1.2,1.15][i]}, rotate:function(i){return [20,-15,-30,10,-20][i]}}, 5.4)
            .to('#blobs5 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 5.4)

            .to('#c8', {duration:0.2, scale:1, ease:'power3'}, 7.1)
            .to('#c9', {duration:0.2, scale:1, ease:'power3'}, 7.75)
            .to('#blobs6 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.2,1.25,1.15][i]}, rotate:function(i){return [12,-15,-20,12][i]}}, 7.5)
            .to('#blobs6 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 7.5)

            .to('#c10', {duration:0.2, scale:1, ease:'power3'}, 8.9)
            .to('#blobs7 g clipPath path', {duration:1.7, scale:function(i){return [1.1,1.25][i]}, rotate:function(i){return [12,-15][i]}}, 8.8)
            .to('#blobs7 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 8.8)

            .to('#c11', {duration:0.2, scale:1, ease:'power3'}, 9.64)
            .to('#blobs8 g clipPath path', {duration:1, scale:function(i){return [1.2,1.15][i]}, rotate:function(i){return [-12,-25][i]}}, 9.1)
            .to('#blobs8 g', {duration:0.3, opacity:1, ease:'power1.inOut', stagger:0.1}, 9.1)

            .fromTo('#arrow-bottom', {duration:0.2, opacity:0.25}, {opacity:0.8, ease:'power3.inOut'}, 9.85)
      
          // toggle "m" ball appearance in footer
          gsap.timeline({
                scrollTrigger:{trigger:".footer-section", start:"top 85", end:"top 70", scrub:0.1}
            })
            .to('.logo-bg-white', {duration:0.3, opacity:1, ease:'power3.inOut'}, 0)
            .to('.txt_m', {duration:0.1, attr:{fill:'#000'}}, 0.1)

          // move "m" ball out of frame at bottom
          gsap.timeline({
                scrollTrigger:{trigger:".hybrid-approach-wrapper", start:'top 110', end:'top -15', scrub:0}
            })
            .to('.hero-logo svg', {y:-125, ease:'none'})


          // UNUSED: alt. option -logo morphs back to full text
          // gsap.timeline({
          //   paused:true,
          //       scrollTrigger:{trigger:".footer-modulo-logo", start:'top 50%', end:'top 51%', toggleActions:"play none reverse none", fastScrollEnd:true}
          //   })
          //   .to('.logo-ball, .logo-bg-white', {duration:0.8, scale:0.5, transformOrigin:'center', opacity:0, ease:'expo.inOut'}, 0)
          //   .to('.txt_m', {duration:0.8, scale:1, attr:{fill:function(i){return ['#fff','rgba(0,0,0.3)'][i]}}, transformOrigin:'center', ease:'expo.inOut'}, 0)
          //   .to('.txt_m', {x:0, ease:'expo.inOut'}, 0.25)
          //   .to('.txt_odulo', {duration:0.3, opacity:1}, 0.25)
          //   .to('.txt_odulo', {x:0, ease:'expo.inOut'}, 0.25)
            
            
        }
      })
      
      
       
    }

}