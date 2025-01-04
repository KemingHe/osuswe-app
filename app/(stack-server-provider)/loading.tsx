import { LoadingSpinner } from '@/components/loading/LoadingSpinner';
import { STACK_PROVIDER_LOADING_MESSAGE } from '@/constants/loadingMessageConstants';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';

export default withCenteredWrapper(() => (
  <LoadingSpinner message={STACK_PROVIDER_LOADING_MESSAGE} />
));
