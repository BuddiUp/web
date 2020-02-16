export default (oldState, updatedProperties) => {
    return {
        ...oldState,
        ...updatedProperties
    };
};
