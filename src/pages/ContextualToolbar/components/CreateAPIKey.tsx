import { motion } from "framer-motion";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";

const CreateAPIKey = () => {
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

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="rounded-lg bg-secondary border border-tertiary px-3 pt-3 shadow-sm overflow-hidden"
        >
            <motion.div variants={itemVariants}>
                <h3 className="block font-semibold text-gray">
                    Create new API key
                </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="w-3/4 text-sm font-medium mt-1">
                Your secret API key will be shared with all users belonging to your organization.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-6 rounded-lg">
                <Input placeholder="API key name" />
            </motion.div>

            <motion.div variants={buttonContainerVariants} className="flex justify-end space-x-4 my-4 mt-6">
                <Button className="!text-black bg-transparent shadow-none">
                    Cancel
                </Button>
                <Button className="bg-primary border-2 border-primary text-white">
                    Connect secret key
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default CreateAPIKey;
