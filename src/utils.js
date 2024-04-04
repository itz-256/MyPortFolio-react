export const getImageUrl = (path) => {
    return new URL(`/assets/assets/${path}`, import.meta.url).href;
};