export const SET_MESSAGE_SUCCESS = 'SET_MESSAGE_SUCCESS'
export const SET_FILE_NAME = 'SET_FILE_NAME'

export const actionSetMessageSuccess = (messageSuccess) => {
    return {
      type: SET_MESSAGE_SUCCESS,
      payload: messageSuccess
    }
  }