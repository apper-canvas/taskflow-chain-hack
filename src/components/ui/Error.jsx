import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  message = "Something went wrong", 
  onRetry,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col items-center justify-center py-12 text-center ${className}`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-500" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Oops! Something went wrong
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md">
        {message}
      </p>
      
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="primary"
          className="shadow-lg hover:shadow-xl"
        >
          <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </motion.div>
  );
};

export default Error;