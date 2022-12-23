import { useQuery, useMutation } from 'react-query';

interface IProps {
  queryKey: string | [string, any];
  queryFn: () => Promise<any>;
  config?: any;
  mutationFn?: () => Promise<any>;
}

const useFetchQuery = ({ queryKey, queryFn, config, mutationFn }: IProps) => {
  console.log('queryKey', queryKey);
  console.log('queryFn', queryFn);
  console.log('config', config);

  const { data, isLoading, error, refetch, isError } = useQuery(
    queryKey,
    queryFn,
    config,
  );
  return {
    data,
    isLoading,
    error,
    refetch,
    isError,
  };

  // handling mutation
  const MutationValue = useMutation(queryKey, mutationFn, config);
  return MutationValue;
};

export default useFetchQuery;
