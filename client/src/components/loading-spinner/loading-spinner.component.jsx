import {SpinnerContainer, SpinnerOverlay} from "./loading-spinner.styles";

const LoadingSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    }
    return Spinner;
}

export default LoadingSpinner;