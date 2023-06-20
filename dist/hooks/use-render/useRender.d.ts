declare const useRender: () => {
    isRender: boolean;
    /** 手动render页面 */
    renderFn: () => void;
};
export default useRender;
