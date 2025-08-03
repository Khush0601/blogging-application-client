import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2   rounded-full text-sm md:text-base font-medium transition"
    >
      <FaArrowLeft className="text-gray-700" />
      
    </button>
  );
};

export default BackButton;
