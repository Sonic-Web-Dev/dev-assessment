import { useQuery } from '@apollo/client';
import { rocketQuery } from '@/queries';

const useRockets = (rocketId: string) => {
  return useQuery(rocketQuery, {
    variables: {
      id: rocketId,
    },
  });
};

export default useRockets;
