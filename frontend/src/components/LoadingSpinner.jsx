import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900'>
			{/* Simple Loading Spinner */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 rounded-full border-violet-200 border-t-violet-500'
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;