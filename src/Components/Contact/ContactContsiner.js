import Contact from './Contact'
import { connect } from 'react-redux'
import { createUserAC, updateNewUserAC } from '../../redux/reducers/usersReducer'

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    countUsers: state.usersPage.countUsers
})

const mapDispatchToProps = ({
    createUser: createUserAC,
    updateNewUse: updateNewUserAC
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)