import { useState } from "react";
import { motion } from "framer-motion";
import { LuCopy } from "react-icons/lu";
import Button from "@/components/UI/Button/Button";
import Switch from "@/components/UI/Controls/Switch";
import Input from "@/components/UI/Input/Input";
import { ToastContainer, } from 'react-toastify';
import { showToast } from "@/components/UI/Toast/Toast";

const ShareWorkSpace = () => {

    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = useState("");

    const containerVariants = {
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

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    const buttonContainerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };
    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const textToCopy = "/mylink.com";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                showToast("Link to secret key copied!", "success");
            })
            .catch(() => {
                showToast("Failed to copy text", "error");
            });
    };
    return (
        <motion.div
            exit="hidden"
            variants={containerVariants}
            onClick={() => setExpanded(!expanded)}
            className="rounded-lg bg-secondary border border-tertiary px-3 pt-3 shadow-sm overflow-hidden"
            animate={expanded ? 'expanded' : 'collapsed'}
            initial="collapsed"
        >
            {!expanded ? (
                <>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <h3 className="block font-semibold text-gray">
                            Sharing is off
                        </h3>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 } }
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="text-sm font-medium mt-1 flex justify-between text-gray"
                    >
                        <span>
                            To share your workspace with other people you need to publish it first.
                        </span>
                        <span>
                            <Switch title="" />
                        </span>
                    </motion.p>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.p variants={itemVariants} className="mt-1 flex justify-between text-gray">
                        <h3 className="block font-semibold text-gray">Sharing is on</h3>
                        <span>
                            <Switch title="" defaultChecked onChange={() => setExpanded(false)} />
                        </span>
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-2 rounded-lg">
                        <Input
                            placeholder="/mylink.com"
                            value={value}

                            onChange={(e) => setValue(e.target.value)}
                        />

                        <Button
                            className="bg-white w-max flex items-center hover:bg-tertiary hover:border gap-1 rounded-md py-2"
                            onClick={handleCopy}
                        >
                            <LuCopy />
                            <span className="text-sm">Copy</span>
                        </Button>
                    </motion.div>
                </motion.div>
            )}

            <motion.div variants={buttonContainerVariants} className="flex justify-end space-x-4 my-4 mt-6">
                <Button className="!text-black bg-transparent shadow-none">Cancel</Button>
                <Button className="bg-primary border-2 border-primary text-white">Connect secret key</Button>
            </motion.div>
            <ToastContainer limit={1} />

        </motion.div>

    );
};

export default ShareWorkSpace;
