export const CHANGE_PAGE = "CHANGE_PAGE";

export default function changePageActionCreator(page) {
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}