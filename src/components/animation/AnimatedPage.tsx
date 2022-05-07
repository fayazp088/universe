import { motion } from 'framer-motion';
import React from 'react';

const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
