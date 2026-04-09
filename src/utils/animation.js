export const containerVariants = (delay = 0)=> ({
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
            delay
        }
    }
})

export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 8
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.4,
            ease: "easeOut",
        }
    }
}
export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
        }
    }
}
export const desVariants = {
    "offscreen": {
        opacity: 0,
        y: 15
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
            delay: .1
        }
    }
}