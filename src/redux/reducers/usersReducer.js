const CREATE_USER = 'CREATE-USER'
const UPDATE_NEW_USER = 'UPDATE-NEW-USER'

let initialState = {
    users: [ 
        {
            id: 1,
            name: 'Alex',
            number: "+380255551122",
            order: 1
        },
        {
            id: 2,
            name: 'Bob',
            number: "+380505556677",
            order: 3
        },
    ], 
    countUsers:2,
    newUser: { 
        id: null,
        name: null,
        number: null,
        order: null
    }
}

const createUser = (state) => { 
    
    return {
        ...state,
        users: [ 
            ...state.users,
            {...state.newUser}
        ],
        newUser: {
            id: null,
            name: null,
            number: null,
            order: null
        },
        countUsers: state.countUsers + 1
    }
}

const updateNewUser = (state, action) => {
    console.log(state)
    if (action.inputForm === "name"){
        return {
            ...state,
            newUser: {
                ...state.newUser,
                id: state.users[state.users.length -1].id + 1,
                name: action.inputData
            }
        }
    }  
    if (action.inputForm === "number"){
        return {
            ...state,
            newUser: {
                ...state.newUser,
                id: state.users[state.users.length -1].id + 1,
                number: action.inputData
            }
        }
    }  
    if (action.inputForm === "order"){
        return {
            ...state,
            newUser: {
                ...state.newUser,
                id: state.users[state.users.length -1].id + 1,
                order: action.inputData
            }
        }
    }
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) { 
        case CREATE_USER: {
            return createUser(state)
        }
        case UPDATE_NEW_USER: {
            return updateNewUser(state, action)
        }
        default: {
            return state
        }
    }
}

export const createUserAC = () => ({type: CREATE_USER})
export const updateNewUserAC = (inputForm, inputData) => ({
    type: UPDATE_NEW_USER,
    inputForm,
    inputData
})