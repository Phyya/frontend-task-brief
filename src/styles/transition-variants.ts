
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: "easeInOut" }
    }
};

export const buttonContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};


export const CreateWebHookContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        x: 100,
        transition: { staggerChildren: 0.1, staggerDirection: -1, duration: 0.5, ease: "easeInOut" }
    }
}

export const CreateWebHookItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, x: 50, transition: { duration: 0.4, ease: "easeIn" } }
}