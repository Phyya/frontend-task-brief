import { motion, AnimatePresence } from "framer-motion"
import Button from "@/components/UI/Button/Button"
import CustomCheckbox from "@/components/UI/Controls/Checkbox"
import CustomRadio from "@/components/UI/Controls/Radio"
import Input from "@/components/UI/Input/Input"
import { TOTAL_EVENTS_LIST } from "@/utils/data/deployment-options"
import { CreateWebHookContainerVariants, CreateWebHookItemVariants } from "@/styles/transition-variants"

const CreateWebHook = () => {



    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={CreateWebHookContainerVariants}
            >
                <motion.h3 variants={CreateWebHookItemVariants} className="text font-medium text-gray mb-2">
                    Create webhook
                </motion.h3>

                <motion.div variants={CreateWebHookItemVariants} className='rounded-lg bg-secondary border border-tertiary px-3 shadow-sm'>
                    <motion.div variants={CreateWebHookItemVariants} className='my-3'>
                        <label className="block font-medium text-gray font-bold mb-2">Endpoint</label>
                        <Input placeholder="https://myapp.com/webhooks" />
                    </motion.div>

                    <motion.div variants={CreateWebHookItemVariants} className='my-3'>
                        <label className="block font-medium text-gray font-bold">Projects</label>
                        <div className="flex flex-col min-[480px]:flex-row min-[1300px]:items-center min-[1300px]:space-x-2 gap-2 min-[1300px]:gap-5 mt-3">
                            <CustomRadio
                                title={<p className="text-sm -mt-1 -ml-[10px]">All team projects in <span className="bg-purple-100 text-purple-500 px-2 py-1 rounded font-bold mx-[0.5px]">acme</span></p>}
                                name="project-options"
                                defaultChecked
                            />
                            <CustomRadio title={<p className="text-sm -mt-2 -ml-[10px]" >Tagged Projects</p>} name="project-options" />
                        </div>
                    </motion.div>

                    <motion.div variants={CreateWebHookItemVariants}>
                        <label className="block font-medium text-gray">Events</label>
                        <div className="grid min-[460px]:grid-cols-2 gap-[1.2rem] mt-2 bg-tertiary px-4 py-4 pt-6 rounded-lg">
                            {TOTAL_EVENTS_LIST.map((event, index) => (
                                <motion.div key={index} variants={CreateWebHookItemVariants}>
                                    <CustomCheckbox title={<p className='text-sm font-semibold -mt-2 -ml-[10px]'>{event}</p>} defaultChecked />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={CreateWebHookItemVariants} className="flex justify-end space-x-4 my-4">
                        <Button className="!text-black bg-transparent shadow-none">Cancel</Button>
                        <Button className='bg-primary border-2 border-primary text-white'>Create webhook</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default CreateWebHook
