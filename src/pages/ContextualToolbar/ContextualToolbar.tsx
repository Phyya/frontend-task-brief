import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/UI/Card/Card';
import CardContent from '@/components/UI/Card/CardContent';
import Button from '@/components/UI/Button/Button';
import CreateWebHook from './components/CreateWebHook';
import ConnectRepositories from './components/ConnectRepositories';
import CreateAPIKey from './components/CreateAPIKey';
import ShareWorkSpace from './components/ShareWorkspace';


const ContextualToolbar = () => {
  const options = ['Create webhook', 'Connect repositories', 'Create API Key', 'Share workspace'];
  const [selectedForm, setSelectedForm] = useState("Create webhook");

  const renderForm = () => {
    switch (selectedForm) {
      case options[0]:
        return <CreateWebHook />;
      case options[1]:
        return <ConnectRepositories />;
      case options[2]:
        return <CreateAPIKey />;
      case options[3]:
        return <ShareWorkSpace />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="bg-white rounded-2xl shadow-sm h-[90vh] my-10 transition-all duration-300 ">
        <div className='relative flex max-[1000px]:flex-col justify-start min-[1000px]:justify-between items-center  min-[980px]:p-10 h-auto min-[1000px]:h-full w-[85%]  mx-auto gap-5 '>
          <div className="max-[1000px]:w-full w-[40%] relative flex flex-col gap-6 h-full">
            <div className='space-y-4 h-full '>
              <div className='my-auto  max-[1000px]:mt-0 mt-36'>
                <h2 className="text-lg font-semibold">Contextual Toolbar</h2>
                <p className="text-sm text-gray-500 w-3/4 max-[480px]:w-full mt-3 mb-4">
                  A toolbar that suggests and enables actions based on users' navigation.
                </p>
                <p className="text-sm text-gray-500 w-3/4 max-[480px]:w-full">
                  Suggestions are related to the current page and users can perform actions in the component without changing page or context.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-tertiary text-gray font-medium text-xs rounded whitespace-nowrap">React</span>
                  <span className="px-2 py-1 bg-tertiary text-gray font-medium text-xs rounded whitespace-nowrap">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-tertiary text-gray font-medium text-xs rounded whitespace-nowrap">Motion (Framer Motion)</span>
                </div>
              </div>
            </div>
            <Link to="/" className='min-[1300px]:absolute left-0 bottom-0 w-max'>
              <Button className='border border-tertiary bg-white text-black  transition-all duration-300 rounded-md'>
                Previous task
              </Button>
            </Link>
          </div>

          <motion.div className="cursor-pointer w-[500px] max-[1000px]:w-full pb-8 min-[1300px]:w-98 ">
            <Card>
              <CardContent className="flex flex-col space-y-4">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedForm}
                    initial={{ opacity: 0, height: "auto" }}
                    animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } }}
                    exit={{ opacity: 0, height: "auto", transition: { duration: 0.2, ease: "easeInOut" } }}
                  >
                    {renderForm()}
                  </motion.div>
                </AnimatePresence>

                <div className='flex justify-center gap-2'>
                  <div className="overflow-x-scroll scrollbar-hide whitespace-nowrap w-[85%]">
                    {options.map(opt =>
                      <Button
                        key={opt}
                        className={`${selectedForm === opt ? "bg-tertiary text-black border border-tertiary" : "bg-transparent"} shadow-none font-semibold text-sm`}
                        onClick={() => setSelectedForm(opt)}
                      >
                        {opt}
                      </Button>
                    )}
                  </div>
                  <div className='border-l-2 border-tertiary flex items-center justify-center cursor-pointer px-3 h-[30px]'>
                    <FaBars />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContextualToolbar;
