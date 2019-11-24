import { GET_ALL_STUDENT_REQUEST, GET_ALL_STUDENT_SUCCESS, SEARCH_REQUEST, TOGGLE_NAME } from '../actionTypes';
const initialState = {
    studentResults: [],
    sortOder: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_STUDENT_REQUEST:
            return {...state};
        case GET_ALL_STUDENT_SUCCESS:
                let array = Object.assign([], state.studentResults);
                Object.keys(action.studentResults).forEach(function (item) {
                    const eachItem = action.studentResults[item];
                    const obj = {
                        class: eachItem.class,
                        name: eachItem.name,
                        marks: eachItem.marks,
                        rollNo: eachItem.rollNo,
                        total:  eachItem.marks.s1 + eachItem.marks.s2 + eachItem.marks.s3
                    }
                    array.push(obj)

                });
            return {
                ...state,
                originalResults: array,
                studentResults: array
            };
            case SEARCH_REQUEST: 
                let originalData = Object.assign([], state.originalResults);
                 let searchResult = originalData.filter((e) => {
                     return !action.input ? true: e.name.toUpperCase().search(action.input.toUpperCase()) !== -1 
                 })
                 return {
                    ...state,
                    studentResults: searchResult
                };
              case TOGGLE_NAME:
                    let withoutSort = Object.assign([], state.studentResults);
                    let newOrder = !state.sortOder;
                    let sortResult = withoutSort.sort((a,b) => {
                        const c = action.param === 'name' ? a[action.param].toUpperCase(): a[action.param];
                        const d = action.param === 'name' ? b[action.param].toUpperCase(): b[action.param];
                      
                        let comparison = 0;
                        if (c > d) {
                          comparison = 1;
                        } else if (c < d) {
                          comparison = -1;
                        }
                        let result = newOrder ? comparison * -1 : comparison
                        return result;
                    }
                    ) ;
                    return {
                       ...state,
                       studentResults: sortResult,
                       sortOder: newOrder
                   };

                   
                  
        default: return state;
    }
}

export default reducer;