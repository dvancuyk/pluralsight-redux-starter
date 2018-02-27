export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE_SUCCESS':
      return [...state, Object.assign({}, action.course)]; //Object.assign([], state.courses, action.course);
    default:
      return state;
  }
}
