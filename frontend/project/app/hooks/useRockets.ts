import { useQuery } from '@apollo/client';
import { rocketsQuery } from '@/queries';

const useRockets = () => {
  return useQuery(rocketsQuery);
};

export default useRockets;
