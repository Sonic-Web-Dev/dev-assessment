import { useRocket } from '@/hooks';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const RocketPage: React.FC<RouteComponentProps<{ rocket_id: string }>> = ({
  match: {
    params: { rocket_id },
  },
}) => {
  const { data } = useRocket(rocket_id);
  return <div className="text-black">{data?.rocket.name}</div>;
};

export default RocketPage;
