import gsap from "gsap";

export function DotAnimation(dot1, dot2) {
    var animationTime = 0.15;
    var dotColor = "#7B1FA2";
    // Dot 1 *************************************************************************************** 
    //Activate dot
    var dot1Activate = gsap.to(dot1, {
        duration: animationTime,
        backgroundColor: dotColor,
        ease: "power2",
        paused: true
    });
    //play animation
    this.dot1.onclick = () => {
        dot1Activate.play();
        dot2Activate.reverse();
    }

    // Dot 2 ************************************************************************************* 
    //Activate dot
    var dot2Activate = gsap.to(dot2, {
        duration: animationTime,
        backgroundColor: dotColor,
        ease: "power2",
        paused: true
    });
    //play animation
    document.querySelector(dot2).onclick = () => {
        dot2Activate.play();
        dot1Activate.reverse();
    }
}

