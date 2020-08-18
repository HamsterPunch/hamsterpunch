import produce from '../util/produce';

export const initialState = {
    stage: 'info'
};

export const CHANGE_STAGE_TO_INFO = 'CHANGE_STAGE_TO_INFO';
export const CHANGE_STAGE_TO_SKILL = 'CHANGE_STAGE_TO_SKILL';

const reducer = (state=initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case CHANGE_STAGE_TO_INFO: {
            draft.stage = 'info';
            break;
        }
        case CHANGE_STAGE_TO_SKILL: {
            draft.stage = 'skill';
            break;
        }

        default: {
            break;
        }
    }
});

export default reducer;