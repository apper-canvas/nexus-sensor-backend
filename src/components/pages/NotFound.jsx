import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <ApperIcon 
            name="AlertTriangle" 
            size={64} 
            className="mx-auto text-primary opacity-70"
          />
          <h1 className="text-6xl font-bold gradient-text">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full">
              <ApperIcon name="Home" size={16} className="mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="flex justify-center space-x-4 text-sm">
            <Link 
              to="/contacts" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Contacts
            </Link>
            <Link 
              to="/companies" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Companies
            </Link>
            <Link 
              to="/deals" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Deals
            </Link>
            <Link 
              to="/analytics" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;