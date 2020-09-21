import { animation } from '../actions';
import { Action } from 'redux';

const { AnimationActions: { ANIMATION_PLAYBACK_COMPLETED } } = animation;

function animationReducer (state = [], action: Action){
  switch (action.type) {
    case ANIMATION_PLAYBACK_COMPLETED:
      return [
        ...state,
        {
          played: true
        }
      ]
    default:
      return state
  }
}

export default animationReducer