import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope, FaFile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const icons = [
    { icon: <FaHome />, link: '/' },
    { icon: <FaUser />, link: '/about' },
    { icon: <FaFile />, link: '/resume' },
    { icon: <FaBriefcase />, link: '/projects' },
    { icon: <FaCode />, link: '/skills' },
    { icon: <FaEnvelope />, link: '/contact' }
  ];
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm p-3 rounded-t-xl shadow-2xl z-50 flex items-center justify-center border-t border-gray-200/50 dark:border-gray-700/50
                 md:left-4 md:top-[45%] md:-translate-y-1/2 md:translate-x-0 md:rounded-r-xl md:rounded-l-none md:flex-col md:bottom-auto md:inset-x-auto md:border-t-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="flex gap-6 md:flex-col md:gap-5">
        {icons.map((item, index) => (
          <motion.div
            key={index}
          >
            <Link
              to={item.link}
              className={`text-2xl text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors
                         md:text-xl md:hover:scale-110 ${location.pathname === item.link ? 'text-pink-500 dark:text-pink-400' : ''}`}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item.icon}
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;