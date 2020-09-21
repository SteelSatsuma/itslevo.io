const ANIMATION_PLAYBACK_COMPLETED = Symbol('ANIMATION_PLAYBACK_COMPLETED');

export interface animationCompleted {
  type: typeof ANIMATION_PLAYBACK_COMPLETED
}

export function animationCompleted(): animationCompleted {
  return {
    type: ANIMATION_PLAYBACK_COMPLETED
  }
}

export const AnimationActions = {
  ANIMATION_PLAYBACK_COMPLETED
}