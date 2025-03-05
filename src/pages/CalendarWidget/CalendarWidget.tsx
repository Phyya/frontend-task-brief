import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Card from '@/components/UI/Card/Card';
import CardContent from '@/components/UI/Card/CardContent';
import Button from '@/components/UI/Button/Button';
import avatar from "../../assets/images/avatar.png"

const CalendarWidget = () => {
  const [expanded, setExpanded] = useState(false);
  const cardVariants = {
    collapsed: { scale: 1, opacity: 1 },
    expanded: {
      scale: 1.1,
      opacity: 1,
      originX: 1,
      originY: 1,
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="bg-white rounded-2xl shadow-sm h-[90vh] my-10 ">
        <div className='relative flex max-[980px]:flex-col justify-around items-center min-[980px]:p-10 h-full w-[85%]  mx-auto gap-6 '>

          <div className=" w-full min-[980px]:w-[50%]  relative max-[980px]:h-auto h-full flex max-[980px]:flex-col  min-[980px]:items-center">
            <div className=' min-[980px]:my-auto space-y-4'>
              <h2 className="text-lg font-semibold">Calendar widget</h2>
              <p className="text-sm text-gray-500 w-3/4">
                Calendar widget with clear timezone differences information. Click on the widget to interact with it.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-tertiary text-xs rounded-lg whitespace-nowrap">React</span>
                <span className="px-2 py-1 bg-tertiary text-xs rounded-lg whitespace-nowrap">Tailwind css</span>
                <span className="px-2 py-1 bg-tertiary text-xs rounded-lg whitespace-nowrap">Motion (prev. framer motion)</span>
              </div>

            </div>
            <Link to="/contextual-toolbar" className='min-[980px]:absolute max-[980px]:my-10 left-0 bottom-0 w-max'>
              <Button className='border border-tertiary bg-white text-black  transition-all duration-300 rounded-md'>Next task</Button>
            </Link>

          </div>

          <motion.div
            className="cursor-pointer w-full min-[980px]:w-1/2 flex justify-center  z-10 "
            onClick={() => setExpanded(!expanded)}
            variants={cardVariants}
            animate={expanded ? 'expanded' : 'collapsed'}
            initial="collapsed"
          >
            <Card className={`${expanded ? "w-80 max-[980px]:ml-[8%] " : "w-48"} max-[980px]:mr-auto `}>
              <CardContent className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-primary bg-purple-100 rounded px-2 py-1">In 15 mins</span>
                  {
                    expanded &&
                    <div className="w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center">
                      <div className="bg-purple-100 w-[14px] h-[14px] rounded-md flex items-center justify-center">
                        <FaPlay className="text-purple-500 text-[8px]" />
                      </div>
                    </div>
                  }
                </div>
                <h3 className="text-sm font-medium">Engineering sync</h3>
                <p className="text-xs text-gray-500 -mt-4">1:30 PM → 2:30 PM</p>
                {expanded && (
                  <div className="border-t border-gray-200 pt-4  flex justify-between">
                    <div className='w-full'>

                      <div className="text-sm font-medium flex gap-3 items-center my-2">
                        <span>
                          Guests
                        </span>
                        <FaGlobe className="text-black" />
                        <span>
                          3
                        </span>
                      </div>
                      <div className='flex justify-between  w-full'>

                        <div className="flex items-center">
                          <img src={avatar} alt="Image 1" className="w-10 h-10 rounded-full border-2 border-white -mr-4" />
                          <img src={avatar} alt="Image 2" className="w-10 h-10 rounded-full border-2 border-white -mr-4" />
                          <img src={avatar} alt="Image 3" className="w-10 h-10 rounded-full border-2 border-white" />
                        </div>

                        <div className="flex space-x-1 ">
                          {Array(6).fill(null).map((_, index) => (
                            <div key={index} className={`w-2 h-10 mx-1 ${index == 0 || index == 2 || index == 6 ? "bg-gray" : "bg-gray-dark2"} rounded-full opacity-50`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default CalendarWidget;
